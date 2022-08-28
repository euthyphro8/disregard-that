import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import posts from './posts';

export default function EssayViewer() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { meta, author, title, content: loadedContent, sections } = posts.find((p) => p.id === id) || {};
	const maxRows = Math.floor(window.innerHeight / 2 / 16) - 1;

	const [content, setContent] = React.useState(loadedContent);
	return (
		<Grid container marginTop={6}>
			<Grid xs={12} item padding={1}>
				<Box sx={{ mb: 1, display: 'flex', flexBasis: 'row', justifyContent: 'space-between' }}>
					<TextField
						placeholder='Title'
						defaultValue={title}
						variant='standard'
						sx={{ transformOrigin: 'top left', transform: 'scale(1.5)', mb: 2 }}
					/>
					<Tooltip title='Save'>
						<IconButton
							color='primary'
							sx={{ my: 1 }}
							onClick={() => {
								// Save Action
								// Recompute calculated fields for post
								navigate(`../${id}`);
							}}
						>
							<SaveAltIcon />
						</IconButton>
					</Tooltip>
				</Box>
				<Box fontSize='0.9em' sx={{ display: 'flex', flexBasis: 'row' }}>
					<Box sx={{ mr: 2 }}>
						<b>Words </b>
						{meta.words}
					</Box>
					<Box sx={{ mr: 2 }}>
						<b>Created </b>
						{meta.created}
					</Box>
					<Box sx={{ mr: 2 }}>
						<b>Updated </b>
						{meta.updated}
					</Box>
				</Box>
				<TextField
					multiline
					placeholder='Content includes markdown support
>----------------------------------------------<
Use "# text" for section headings
Use "*text*" for italicized text
Use "**text**" for emboldened text
Use "> text" for block quotes
Use "- text" for bulleted lists
Use "1. text" for numbered lists
Use "---" for horizontal rules'
					fullWidth
					sx={{
						mt: 2,
						'textarea::-webkit-scrollbar': { width: '.5em' },
						'textarea::-webkit-scrollbar-track': { backgroundColor: 'background.paper' },
						'textarea::-webkit-scrollbar-thumb': { backgroundColor: 'text.secondary' },
						'textarea::-webkit-scrollbar-thumb:hover': { backgroundColor: 'text.primary' },
					}}
					defaultValue={content}
					rows={maxRows}
				/>
			</Grid>
		</Grid>
	);
}

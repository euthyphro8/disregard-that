import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';

import posts from './posts';

export default function Essay() {
	const { id } = useParams();
	const { meta, author, title, content } = posts.find((p) => p.id == id) || {};
	return (
		<Grid container marginTop={6}>
			<Grid item xs={2}></Grid>
			<Grid item xs={10} padding={1}>
				<Typography fontSize='2.4rem' fontWeight={900}>
					{title}
				</Typography>
				<Typography
					fontSize='1.1em'
					sx={{ mt: 1, display: 'flex', flexBasis: 'row' }}
				>
					<Box sx={{ mr: 2 }}>
						by <b>{author}</b>
					</Box>
					<Box sx={{ mr: 2 }}>{Math.ceil(meta.words / 130)} min read</Box>
					<Box sx={{ mr: 2 }}>{meta.created}</Box>
					<Box sx={{ mr: 2 }}>{meta.comments} comments</Box>
				</Typography>
				<Typography variant='body1' marginTop={2}>
					{content}
				</Typography>
			</Grid>
		</Grid>
	);
}

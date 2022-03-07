import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function getTypeColor(type) {
	// TODO Sort out better color properties in the theme.
	switch (type) {
		case 'podcast':
			return 'warning.main';
		case 'note':
			return 'info.main';
		case 'essay':
			return 'success.main';
		default:
			return 'secondary.main';
	}
}

export default function SearchResult({ post }) {
	const { type, id, title, description, date, likes } = post;
	const typeColor = getTypeColor(type);
	return (
		<Box sx={{ m: 1 }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography
						sx={{
							textTransform: 'capitalize',
							padding: '0 6px',
							borderRadius: '4px',
							mr: 1,
							bgcolor: typeColor,
						}}
					>
						{type}
					</Typography>
					<Typography variant='h6'>{title}</Typography>
				</Box>
				<Typography sx={{ fontWeight: 400 }}>{date}</Typography>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: 300 }}>{description}</Typography>
			</Box>
		</Box>
	);
}

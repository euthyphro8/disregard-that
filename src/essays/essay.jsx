import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Essay({ name, content, date }) {
	return (
		<Box>
			<Typography variant='h4' sx={{ fontWeight: 900 }}>
				{name}
			</Typography>
			<Typography variant='h5'>{date}</Typography>
			<Typography variant='h5'>{content}</Typography>
		</Box>
	);
}

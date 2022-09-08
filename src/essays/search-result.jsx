import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

import Badge from '@mui/material/Badge';

export default function SearchResult({ post, onClick }) {
	const { updated, user, title, stats, versions } = post || {};
	const { love, like, dislike, hate } = stats || {};
	const { name: author } = user || {};
	const comments = 0;
	console.log(new Date(updated));
	return (
		<Box
			id='result-container'
			sx={{
				p: 1,
				cursor: 'default',
				borderTop: '1px solid #fff',
				borderTopColor: 'text.secondary',
				'&:hover': { background: '#ddd2' },
			}}
			onClick={onClick}
		>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', p: '8px' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography sx={{ mr: 1, fontWeight: 200, fontSize: '0.9em' }}>
						{2 * (love - hate) + (like - dislike)}
					</Typography>
					<Typography sx={{ mr: 2, fontSize: '1em' }}>{title}</Typography>
					<Typography sx={{ mr: 1, fontWeight: 200, fontSize: '0.9em' }}>
						v{versions || 1}
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography sx={{ mr: 2, fontWeight: 200, fontSize: '0.9em' }}>
						{author}
					</Typography>
					<Typography sx={{ mr: 2, fontWeight: 400, fontSize: '0.9em' }}>
						{/* {formatDistanceToNow(new Date(updated))} */}
						{updated}
					</Typography>
					<Badge overlap='circular' color='primary' badgeContent={comments}>
						<ModeCommentIcon />
					</Badge>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	);
}

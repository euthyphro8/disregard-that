import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

import Badge from '@mui/material/Badge';

// import CommentIcon from '../components/CommentIcon';

// function getTypeColor(type) {
// 	// TODO Sort out better color properties in the theme.
// 	switch (type) {
// 		case 'podcast':
// 			return 'warning.main';
// 		case 'note':
// 			return 'info.main';
// 		case 'essay':
// 			return 'success.main';
// 		default:
// 			return 'secondary.main';
// 	}
// }

function dateToAge(date) {}

export default function SearchResult({ post, onClick }) {
	const { author, title, blurb, meta } = post || {};
	const { created, updated, versions, tags, votes, comments, words } =
		meta || {};
	const { love, like, dislike, hate } = votes || {};
	// const typeColor = getTypeColor(type);
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
					{/* <Typography
						sx={{
							textTransform: 'capitalize',
							padding: '0 6px',
							borderRadius: '4px',
							mr: 1,
							bgcolor: typeColor,
						}}
					>
						{type}
					</Typography> */}
					<Typography sx={{ mr: 1, fontWeight: 200, fontSize: '0.9em' }}>
						{2 * (love - hate) + (like - dislike)}
					</Typography>
					<Typography sx={{ mr: 2, fontSize: '1em' }}>{title}</Typography>
					<Typography sx={{ mr: 1, fontWeight: 200, fontSize: '0.9em' }}>
						v{versions}
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography sx={{ mr: 2, fontWeight: 200, fontSize: '0.9em' }}>
						{author}
					</Typography>
					<Typography sx={{ mr: 2, fontWeight: 400, fontSize: '0.9em' }}>
						{formatDistanceToNow(new Date(updated))}
					</Typography>
					{/* <Typography sx={{ fontWeight: 400 }}> */}
					{/* <CommentIcon count={comments} /> */}
					<Badge overlap='circular' color='primary' badgeContent={comments}>
						<ModeCommentIcon />
					</Badge>
					{/* </Typography> */}
				</Box>
			</Box>
			<Box></Box>
		</Box>
	);
}

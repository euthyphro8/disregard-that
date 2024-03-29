import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchResult from './search-result';
import { useNavigate } from 'react-router-dom';

const GET_POSTS = gql`
	query GetPosts {
		posts {
			id
			created
			updated
			version
			tags
			stats {
				likes
				dislikes
				loves
				hates
			}
			words
			title
			blurb
			content
			sections
			user {
				id
				email
				name
			}
		}
	}
`;

export default function SearchListing() {
	const navigate = useNavigate();
	const { data } = useQuery(GET_POSTS);
	const posts = data?.posts || [];
	return (
		<Box
			sx={{
				my: 1,
				borderRadius: '5px',
				border: '1px solid #fff',
				borderColor: 'text.secondary',
			}}
		>
			<Typography
				// fontWeight={700}
				fontSize='1.2em'
				sx={{
					p: 1,
					px: 3,
					backgroundColor: 'background.paper',
					borderTopLeftRadius: '5px',
					borderTopRightRadius: '5px',
				}}
			>
				Latest ({posts.length} post)
			</Typography>
			{/* <Typography variant='h6' sx={{ fontWeight: 700 }} gutterBottom>
				In total, there are{' '}
				<Box sx={{ bgcolor: 'warning.main', display: 'inline', px: 1 }}>
					{posts.length}
				</Box>{' '}
				posts.
			</Typography> */}
			{/* <TextField
				id='outlined-basic'
				fullWidth
				label='Search'
				variant='outlined'
				sx={{ mb: 2 }}
			/> */}
			<Box>
				{posts.map((p) => (
					<SearchResult
						key={p.id}
						post={p}
						onClick={() => navigate(`./${p.id}`)}
					/>
				))}
			</Box>
		</Box>
	);
}

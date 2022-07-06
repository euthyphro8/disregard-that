import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchResult from './search-result';
import Essay from './essay';

const posts = [
	{
		type: 'essay',
		id: 2,
		title: 'The Metaphysics of Free Will',
		description: "So... basically there's no free will.",
		date: '2022-11-10',
	},
	{
		type: 'note',
		id: 1,
		title: 'Ontological Nonsense',
		description: 'Ontology is a complete and utter cluster fuck.',
		date: '2022-04-12',
	},
];

export default function EssayPage() {
	const [selected, setSelected] = React.useState(null);
	return (
		<Box sx={{ my: 4 }}>
			{selected ? (
				<Essay
					name={selected.title}
					content={selected.description}
					date={selected.date}
				/>
			) : (
				<>
					<Typography variant='h4' sx={{ fontWeight: 900 }}>
						ESSAYS
					</Typography>
					<Typography variant='h6' sx={{ fontWeight: 700 }} gutterBottom>
						In total, there are{' '}
						<Box sx={{ bgcolor: 'warning.main', display: 'inline', px: 1 }}>
							{posts.length}
						</Box>{' '}
						posts.
					</Typography>
					<TextField
						id='outlined-basic'
						fullWidth
						label='Search'
						variant='outlined'
						sx={{ mb: 2 }}
					/>
					<Box>
						{posts.map((p) => (
							<SearchResult
								key={p.id}
								post={p}
								onClick={() => setSelected(p)}
							/>
						))}
					</Box>
				</>
			)}
		</Box>
	);
}

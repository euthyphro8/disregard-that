import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

import posts from './posts';

export default function EssayViewer() {
	const { id } = useParams();
	const { meta, author, title, content, sections } = posts.find((p) => p.id === id) || {};
	const [section, setSection] = React.useState(null);

	// Scroll event handler
	const onScroll = React.useCallback(() => {
		const els = sections.map((h) => document.getElementById(h.toLowerCase().replace(/ /g, '-')));
		let focused = els[0];
		for (const el of els) {
			const elY = el.getBoundingClientRect().top;
			if (elY < window.innerHeight / 2) focused = el;
		}
		setSection(focused.innerText);
	}, [sections, setSection]);

	// Component mount/unmount to add/remove scroll event listener
	React.useEffect(() => {
		if (!sections.length) return;
		let throttle = 0;
		window.addEventListener(
			'scroll',
			() => {
				if (!throttle) onScroll();
				throttle = (throttle + 1) % 10;
			},
			true
		);
		return () => window.removeEventListener('scroll', onScroll);
	});

	return (
		<Grid container marginTop={6}>
			{sections.length > 0 && (
				<Grid item xs={2}>
					<Box
						sx={{
							position: 'sticky',
							top: 20,
							m: 2,
							p: 1,
							backgroundColor: 'background.paper',
							borderTopLeftRadius: '5px',
							borderTopRightRadius: '5px',
							borderRadius: '5px',
							border: '1px solid #fff',
							borderColor: 'text.secondary',
						}}
					>
						<Typography
							sx={{
								p: 1,
								cursor: 'default',
								borderTopColor: 'text.secondary',
								'&:hover': { background: '#ddd2' },
							}}
							fontSize='0.8em'
							fontWeight={600}
						>
							{title}
						</Typography>
						{sections.map((s, index) => (
							<Link
								key={`table-of-contents-${s}`}
								sx={{ all: 'unset' }}
								href={`#${s.toLowerCase().replace(/ /g, '-')}`}
								onClick={() => setSection(s)}
							>
								<Typography
									sx={{
										p: 1,
										cursor: 'default',
										borderTop: '1px solid #fff',
										borderTopColor: 'text.secondary',
										'&:hover': { background: '#ddd2' },
									}}
									fontSize='0.8em'
								>
									{s === section ? <b>{s}</b> : s}
								</Typography>
							</Link>
						))}
					</Box>
				</Grid>
			)}
			<Grid item xs={sections.length ? 10 : 12} padding={1}>
				<Typography fontSize='2.4rem' fontWeight={900}>
					{title}
				</Typography>
				<Box fontSize='1.1em' sx={{ mt: 1, display: 'flex', flexBasis: 'row' }}>
					<Box sx={{ mr: 2 }}>
						by <b>{author}</b>
					</Box>
					<Box sx={{ mr: 2 }}>{Math.ceil(meta.words / 250)} min read</Box>
					<Box sx={{ mr: 2 }}>{meta.created}</Box>
					<Box sx={{ mr: 2 }}>{meta.comments} comments</Box>
				</Box>
				<ReactMarkdown children={content} rehypePlugins={[rehypeSlug]} />
			</Grid>
		</Grid>
	);
}

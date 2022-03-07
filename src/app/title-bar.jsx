import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LightIcon from '@mui/icons-material/LightModeOutlined';
import DarkIcon from '@mui/icons-material/ModeNightOutlined';

export default function TitleBar({ isDark, setDark }) {
	return (
		<Box sx={{ my: 3, display: 'flex', justifyContent: 'space-between' }}>
			<Box>
				<Button href='/'>Home</Button>
				<Button href='/essays'>Essays</Button>
				<Button href='/podcasts'>Podcasts</Button>
			</Box>
			<Box>
				<Button onClick={() => setDark(!isDark)}>
					{isDark ? <DarkIcon /> : <LightIcon />}
				</Button>
			</Box>
		</Box>
	);
}

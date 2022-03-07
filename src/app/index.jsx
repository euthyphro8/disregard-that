import React from 'react';
import Container from '@mui/material/Container';
import Router from './router';
import Copyright from './copyright';
import TitleBar from './title-bar';
import Theme from './theme';

export default function App() {
	const [isDark, setDark] = React.useState(true);
	return (
		<Theme isDark={isDark}>
			<Container>
				<TitleBar isDark={isDark} setDark={setDark} />
				<Router />
				<Copyright />
			</Container>
		</Theme>
	);
}

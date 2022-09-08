import React from 'react';
import Container from '@mui/material/Container';
import Router from './router';
import Copyright from './copyright';
import TitleBar from './title-bar';
import Theme from './theme';
import Client from './client';

export default function App() {
	const [isDark, setDark] = React.useState(true);
	return (
		<Theme isDark={isDark}>
			<Client>
				<Container>
					<TitleBar isDark={isDark} setDark={setDark} />
					<Router />
					<Copyright />
				</Container>
			</Client>
		</Theme>
	);
}

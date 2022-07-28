import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const typography = {
	fontFamily: 'Montserrat, sans-serif',
};
const palette = {};

const darkTheme = createTheme({
	typography,
	palette: {
		primary: {
			main: '#95CC5E',
		},
		secondary: {
			main: '#DB784D',
		},
		background: {
			default: '#0D1117',
			paper: '#161B22',
		},
		text: {
			primary: '#ebd1b7',
			secondary: '#30363D',
		},
		mode: 'dark',
	},
});

const lightTheme = createTheme({
	typography,
	palette: {
		primary: {
			main: '#84b955',
		},
		secondary: {
			main: '#d6a64f',
		},
		background: {
			default: '#e0c8a2',
			paper: '#FFE8B8',
		},
		text: {
			primary: '#4d463e',
		},
		mode: 'light',
	},
});

export default function Theme({ isDark, children }) {
	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

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
		...palette,
		mode: 'dark',
	},
});

const lightTheme = createTheme({
	typography,
	palette: {
		...palette,
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

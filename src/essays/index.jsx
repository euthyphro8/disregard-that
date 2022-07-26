import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchListing from './search-listing';
import Essay from './essay';

export default function EssayPage() {
	return (
		<Routes>
			<Route path='/' element={<SearchListing />} />
			<Route path=':id' element={<Essay />} />
		</Routes>
	);
}

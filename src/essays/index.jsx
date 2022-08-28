import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchListing from './search-listing';
import Essay from './essay';
import Editor from './editor';

export default function EssayPage() {
	return (
		<Routes>
			<Route path='/' element={<SearchListing />} />
			<Route path=':id' element={<Essay />} />
			<Route path=':id/editor' element={<Editor />} />
		</Routes>
	);
}

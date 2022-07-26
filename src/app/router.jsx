import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../home';
import EssaysPage from '../essays';
import PodcastsPage from '../podcasts';
import NotFoundPage from './not-found';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='essays/*' element={<EssaysPage />} />
				<Route path='podcasts' element={<PodcastsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

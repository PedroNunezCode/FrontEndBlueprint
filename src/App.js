import React from 'react';
import SampleComponent from './components/SampleComponent';
import NotFound from './components/shared/NotFound';

import { BrowserRouter as Router, Routes, Route, Switch  } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<SampleComponent />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}
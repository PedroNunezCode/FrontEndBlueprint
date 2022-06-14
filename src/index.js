import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.scss';

import App from './App';

// Remove the two following lines if you don't plan on using redux
import { Provider } from 'react-redux';
import store from './api/reduxStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
import { configureStore } from '@reduxjs/toolkit';
import sampleReducers from './reduxReducers/sampleReducers.js';

const store = configureStore({
	reducer: {
		sample: sampleReducers
	}
});

export default store;
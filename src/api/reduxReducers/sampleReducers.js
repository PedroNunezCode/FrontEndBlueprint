import { createSlice } from '@reduxjs/toolkit'

const sampleSlice = createSlice({
	name: 'sample',
	initialState: { total: 0 },
	reducers: {
		add(state) {
			state.total += 1;
		},
		subtract(state) {
			state.total -= 1;
		}
	}
})

export const { add, subtract } = sampleSlice.actions;
export default sampleSlice.reducer;
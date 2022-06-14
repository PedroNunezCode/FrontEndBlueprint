/*You can achive this exact behavior within an onClick call. 
		However this will clean up the codebase if the project gets to big. */

import { add, subtract } from '../reduxReducers/sampleReducers';

export const addNumber = (dispatch) => {
	return dispatch(add());
}

export const subtractNumber = (dispatch) => {
	return dispatch(subtract());
}
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addNumber, subtractNumber } from '../api/reduxActions/sampleActions';




const SampleComponent = () => {
	// Allows you to call an action and change the state
	const dispatch = useDispatch();
	const { total } = useSelector((state) => { return state.sample });


	return (
		<div className="align-center">
			<h1>Front End Template</h1>
			<h2>(Just the basics)</h2>
			<br></br>
			<br></br>
			{/* The redux store declaration is inside src/index.js  */}
			<h2>Below is an example of Redux</h2>
			<h2 style={{ textAlign: 'center', padding: '20px' }}>Total: {total}</h2>
			<div style={sampleDivStyling}>
				<button onClick={() => addNumber(dispatch)}>Add</button>
				<button onClick={() => subtractNumber(dispatch)}>Subtract</button>
			</div>
		</div>
	)
}

const sampleDivStyling = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center'
}

export default SampleComponent;
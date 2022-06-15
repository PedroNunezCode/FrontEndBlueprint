import React from 'react';

const NotFoudStyling = {
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

const NotFound = () => {
	return (
		<div style={NotFoudStyling}>
			<h1>Page Not Found</h1>
		</div>
	)
}

export default NotFound;
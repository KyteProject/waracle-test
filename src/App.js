import React from 'react';
import { Router } from '@reach/router';
import { setGlobal } from 'reactn';
import styled from 'styled-components';
import Modal from 'react-modal';
import Home from './views/Home';

// Hides background content for screenreaders while modal is open
Modal.setAppElement( document.getElementById( 'root' ) );

const Title = styled.h1`
	text-align: center;
	text-decoration: underline;
`;

const App = () => {
	// Set global state for CakeAdd modal
	setGlobal( {
		globalModalState: '',
		cakeSubmit: false
	} );

	return (
		<React.Fragment>
			<Title>CAKES!</Title>
			<Router>
				<Home path="/" />
			</Router>
		</React.Fragment>
	);
};

export default App;

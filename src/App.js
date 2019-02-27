import React from 'react';
import { Router } from '@reach/router';
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

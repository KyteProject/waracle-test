import React from 'react';
import { Router } from '@reach/router';
import { setGlobal } from 'reactn';
import styled from 'styled-components';
import Home from './views/Home';

const Title = styled.h1`
		text-align: center;
		text-decoration: underline;
	`,
	App = () => {
		setGlobal( {
			globalModalState: false
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

import React, { Component } from 'react';
import CakeList from './components/CakeList';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	text-decoration: underline;
`;

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Title>CAKES!</Title>
				<CakeList />
			</React.Fragment>
		);
	}
}

export default App;

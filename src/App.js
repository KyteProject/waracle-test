import React from 'react';
import CakeList from './components/CakeList';
import styled from 'styled-components';
import CakeAdd from './components/CakeAdd';

const Title = styled.h1`
		text-align: center;
		text-decoration: underline;
	`,
	App = () => {
		return (
			<React.Fragment>
				<Title>CAKES!</Title>
				{/* <CakeList /> */}
				<CakeAdd />
			</React.Fragment>
		);
	};

export default App;

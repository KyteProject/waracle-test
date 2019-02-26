import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
	position: absolute;
	margin: 0;
	padding: 50;

	li {
		list-style-type: none;
	}

	img {
		width: 150px;
		height: 150px;
	}
`;

// S1: List all cakes, showing only the image and name
export default class CakeList extends Component {
	constructor( props ) {
		super( props );

		this.state = { cakes: [] };
	}

	async componentDidMount() {
		let res;

		try {
			res = await axios.get( `${process.env.REACT_APP_CAKE_API}` );
		} catch ( err ) {
			console.log( `Error has occured: ${err}` );
		}

		const cakes = res.data;

		this.setState( { cakes } );
	}

	render() {
		return (
			<List>
				{this.state.cakes.map( ( cake ) => (
					<li key={cake.id}>
						<h4>{cake.name}</h4>
						<img src={cake.imageUrl} alt={cake.name} />
						<hr />
					</li>
				) )}
			</List>
		);
	}
}

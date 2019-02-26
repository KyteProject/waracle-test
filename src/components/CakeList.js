import React, { useState, useEffect } from 'react';
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

/**
 * Fetches cake list array from API and updates component state.
 * @param {function} setCakes - The title update function.
 */
const fetchCakes = async( setCakes ) => {
	let res;

	try {
		res = await axios.get( `${process.env.REACT_APP_CAKE_API}` );
	} catch ( err ) {
		console.log( `Error has occured: ${err}` );
	}

	const cakeList = res.data;

	setCakes( cakeList );
};

/**
 *  List all cakes, showing only the image and name
 */
const CakeList = () => {
	const [ cakes, setCakes ] = useState( [] );

	useEffect( () => {
		fetchCakes( setCakes );
	}, [] );

	return (
		<List>
			<p>Submit a cake?</p>
			{cakes.map( ( cake ) => (
				<li key={cake.id}>
					<h4>{cake.name}</h4>
					<img src={cake.imageUrl} alt={cake.name} />
					<hr />
				</li>
			) )}
		</List>
	);
};

export default CakeList;

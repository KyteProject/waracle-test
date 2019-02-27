import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';

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
	const [ cakes, setCakes ] = useState( [] ),
		[ modalSate, setModal ] = useGlobal( 'globalModalState' ),
		[ submit, setSubmit ] = useGlobal( 'cakeSubmit' );

	const openModal = ( id ) => {
			setModal( `${id}` );
		},
		closeModal = () => {
			setModal( '' );
		};

	useEffect(
		() => {
			fetchCakes( setCakes );
			setSubmit( false );
		},
		[ submit ]
	);

	return (
		<List>
			{cakes.map( ( cake ) => (
				<li key={cake.id}>
					<h4>{cake.name}</h4>
					<img src={cake.imageUrl} alt={cake.name} onClick={() => openModal( `${cake.id}` )} />
					<hr />
					<Modal isOpen={modalSate === cake.id} onRequestClose={closeModal} contentLabel="Cake Details">
						<button onClick={closeModal}>Close</button>
						<p>Name: {cake.name}</p>
						<img src={cake.imageUrl} alt={cake.name} height="250" width="250" />
						<p>Comment: {cake.comment}</p>
						<p>Yum Factor: {cake.yumFactor}</p>
					</Modal>
				</li>
			) )}
		</List>
	);
};

export default CakeList;

import React, { useState } from 'react';
import Modal from 'react-modal';
import CakeList from '../components/CakeList';
import CakeAdd from '../components/CakeAdd';

const Home = () => {
	const [ modalSate, setModal ] = useState( false );

	const openModal = () => {
			setModal( true );
		},
		closeModal = () => {
			setModal( false );
		};

	return (
		<React.Fragment>
			<button onClick={openModal}>Submit a cake</button>
			<CakeList />
			<Modal isOpen={modalSate} onRequestClose={closeModal} contentLabel="Add cake">
				<button onClick={closeModal}>Close</button>
				<h2>Add a new cake!</h2>
				<CakeAdd />
			</Modal>
		</React.Fragment>
	);
};

export default Home;

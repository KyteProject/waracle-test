import React from 'react';
import { useGlobal } from 'reactn';
import Modal from 'react-modal';
import CakeAdd from '../components/CakeAdd';
import CakeList from '../components/CakeList';

const Home = () => {
	const [ modalSate, setModal ] = useGlobal( 'globalModalState' );

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
			<Modal isOpen={modalSate} onRequestClose={closeModal} contentLabel="Modal">
				<button onClick={closeModal}>Close</button>
				<h2>Add a new cake!</h2>
				<CakeAdd />
			</Modal>
		</React.Fragment>
	);
};

export default Home;

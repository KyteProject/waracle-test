import React from 'react';
import Modal from 'react-modal';
import { useGlobal } from 'reactn';
import CakeList from '../components/CakeList';
import CakeAdd from '../components/CakeAdd';

/**
 *  Home view: displays list of cakes and option to add one.
 */
const Home = () => {
	const [ modalSate, setModal ] = useGlobal( 'globalModalState' );

	const openModal = () => {
			setModal( 'cake-add' );
		},
		closeModal = () => {
			setModal( '' );
		};

	return (
		<React.Fragment>
			<button onClick={() => openModal()}>Submit a cake</button>
			<Modal isOpen={modalSate === 'cake-add'} onRequestClose={closeModal} contentLabel="Add cake">
				<button onClick={closeModal}>Close</button>
				<h2>Add a new cake!</h2>
				<CakeAdd />
			</Modal>
			<CakeList />
		</React.Fragment>
	);
};

export default Home;

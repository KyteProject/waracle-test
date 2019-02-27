import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import axios from 'axios';

/**
 * Submits a cake to the API
 */
const CakeAdd = () => {
	const [ name, setName ] = useState( '' ),
		[ comment, setComment ] = useState( '' ),
		[ yumFactor, setYumFactor ] = useState( '' ),
		[ imageUrl, setImageUrl ] = useState( '' ),
		[ modalSate, setModal ] = useGlobal( 'globalModalState' ),
		[ submit, setSubmit ] = useGlobal( 'cakeSubmit' );

	const handleSubmit = ( event ) => {
		event.preventDefault();

		const cake = {
			name,
			comment,
			imageUrl,
			yumFactor
		};

		try {
			axios.post( `${process.env.REACT_APP_CAKE_API}`, cake );
		} catch ( err ) {
			console.log( `Error has occured: ${err}` );
		}

		setSubmit( true );
		setModal( false );
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					id="input-name"
					onChange={( event ) => setName( event.target.value )}
					placeholder="Cake name"
				/>
				<input
					type="text"
					name="imageUrl"
					id="input-image-url"
					onChange={( event ) => setImageUrl( event.target.value )}
					placeholder="Image URL"
				/>
				<label>Yum Factor: </label>
				<select name="yum-factor" id="input-yum-factor" onChange={( event ) => setYumFactor( event.target.value )}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<textarea
					name="comment"
					type="text"
					id="input-message"
					placeholder="A nice comment!"
					onChange={( event ) => setComment( event.target.value )}
				/>
				<button type="submit" id="input-submit">
					Submit cake!
				</button>
			</form>
		</div>
	);
};

export default CakeAdd;

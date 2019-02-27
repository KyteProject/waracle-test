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
		[ formErrors, setFormErrors ] = useState( '' ),
		[ modalSate, setModal ] = useGlobal( 'globalModalState' ),
		[ submit, setSubmit ] = useGlobal( 'cakeSubmit' );

	const handleSubmit = ( event ) => {
		event.preventDefault();

		const cake = {
				name,
				comment,
				imageUrl,
				yumFactor
			},
			urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

		if ( urlRegex.exec( cake.imageUrl ) === null ) {
			return setFormErrors( 'Not a valid URL' );
		}

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
					required
					type="text"
					name="name"
					id="input-name"
					onChange={( event ) => setName( event.target.value )}
					placeholder="Cake name"
				/>
				<input
					required
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
				<input
					required
					name="comment"
					type="text"
					id="input-message"
					placeholder="A nice comment!"
					onChange={( event ) => setComment( event.target.value )}
				/>
				<button type="submit" id="input-submit">
					Submit cake!
				</button>
				<p>{formErrors}</p>
			</form>
		</div>
	);
};

export default CakeAdd;

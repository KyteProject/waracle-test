// I should be able add a cake from the list of all cakes view
// I should be taken to a view where I am able to specify the name a comment and
// a yum factor between 1 and 5.
// I should be returned back to the list of cakes after submitting.
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Submits a cake to the API
 */
const CakeAdd = () => {
	const [ name, setName ] = useState( '' ),
		[ comment, setComment ] = useState( '' ),
		[ yumFactor, setYumFactor ] = useState( '' ),
		[ imageUrl, setImageUrl ] = useState( '' );

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

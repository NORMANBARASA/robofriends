import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='tc bg-dark-green dib br3 pa2'>

		<input
		 type= "search" 
		 placeholder="search robots"
		 onChange = {searchChange}
		 />
		 </div>
		)
}

export default SearchBox;
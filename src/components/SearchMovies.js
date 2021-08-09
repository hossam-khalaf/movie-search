import React from 'react'
import './SearchMovies.css'

const SearchMovies = () => {
	return (
		<form className='form'>
			<label htmlFor='query' className='label'>
				Movie Name:
			</label>
			<input
				className='input'
				type='text'
				name='query'
				placeholder='i.e. Mad Max'
			/>
			<button type='submit' className='button'>
				Search
			</button>
		</form>
	)
}

export default SearchMovies

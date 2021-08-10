import React from 'react'
import './SearchMovies.css'

const SearchMovies = () => {
	const searchMovies = async (e) => {
		e.preventDefault()

		const query = ''

		const url = `https://api.themoviedb.org/3/search/movie?api_key=1fe844e090d2aab7a7976a3cbfa5d31b&language=en-US&query=${query}&page=1&include_adult=false`

		try {
			const res = await fetch(url)
			const data = await res.json()

			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form className='form' onSubmit={searchMovies}>
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

import { useState } from 'react'
import './SearchMovies.css'

const SearchMovies = () => {
	// states - input query, movies
	const [query, setQuery] = useState('')
	// Movies state
	const [movies, setMovies] = useState([])

	const searchMovies = async (e) => {
		e.preventDefault()

		const url = `https://api.themoviedb.org/3/search/movie?api_key=1fe844e090d2aab7a7976a3cbfa5d31b&language=en-US&query=${query}&page=1&include_adult=false`

		try {
			const res = await fetch(url)
			const data = await res.json()

			console.log(data.results)
			setMovies(data.results)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			{' '}
			<form className='form' onSubmit={searchMovies}>
				<label htmlFor='query' className='label'>
					Movie Name:
				</label>
				<input
					className='input'
					type='text'
					name='query'
					placeholder='i.e. Mad Max'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type='submit' className='button'>
					Search
				</button>
			</form>
			<div className='card-list'>
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div className='card' key={movie.id}>
							<img
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={`${movie.title} poster`}
								className='card--img'
							/>
							<div className='card--content'>
								<h3 className='card--title'>{movie.title}</h3>
								<p>
									<small>RELEASE DATE: {movie.release_date}</small>
								</p>
								<p>
									<small>RATING: {movie.vote_average}</small>
								</p>
								<p className='card--desc'>{movie.overview}</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default SearchMovies

import React from 'react'
import { useSelector } from 'react-redux';
import { getMoviesSelector } from '../../../store/movies/selectors';
import { MovieCard } from '../MovieCard';
import { MoviesWrapper } from './styles';

export const MovieList = () => {
    const movies = useSelector(getMoviesSelector)

    return (
        <MoviesWrapper>
            {movies.map(movie =>
                <MovieCard
                    key={movie.id}
                    genre={(movie.genres as Array<String>).join(', ')}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date?.substring(0, 4)}
                    overview={movie.overview}
                    runtime={movie.runtime}
                    voteAverage={movie.vote_average}
                />
            )}
        </MoviesWrapper>
    )
}

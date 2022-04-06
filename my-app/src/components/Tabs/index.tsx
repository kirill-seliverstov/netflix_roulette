import React, { FC, useEffect, useState } from 'react'
import { STabs, STabList, STab, STabPanel, MoviesLimitButton } from './styles'
import { MovieCard } from '../Movies/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/movies/actions';
import { getMoviesSelector } from '../../store/movies/selectors';
import { MovieList } from '../Movies/MovieList';

export const Tabs: FC = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMoviesSelector)

    const [limit, setLimit] = useState<number>(0)

    useEffect(() => {
        dispatch(fetchMovies({ moviesLimit: limit }))
    }, [limit, movies])

    const filterGenre = (array = movies, filter: string) => {
        return (
            array.filter(item =>
                item.genres.includes(filter)
            ).map(movie =>
                <MovieCard
                    key={movie.id}
                    genre={movie.genres}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date}
                    overview={movie.overview}
                    runtime={movie.runtime}
                />
            )
        )
    }

    return (
        <>
            <STabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <STabList>
                    <STab>All</STab>
                    <STab>Documentary</STab>
                    <STab>Comedy</STab>
                    <STab>Horror</STab>
                    <STab>Crime</STab>
                </STabList>
                <STabPanel>
                    <MovieList />
                    <MoviesLimitButton onClick={() => setLimit(limit + 10)}>More</MoviesLimitButton>
                </STabPanel>
                <STabPanel>
                    {filterGenre(movies, 'documentary')}
                </STabPanel>
                <STabPanel>
                    {filterGenre(movies, 'comedy')}
                </STabPanel>
                <STabPanel>
                    {filterGenre(movies, 'horror')}
                </STabPanel>
                <STabPanel>
                    {filterGenre(movies, 'crime')}
                </STabPanel>

            </STabs>
        </>
    )
}

import React, { FC, useEffect } from 'react'
import { STabs, STabList, STab, STabPanel } from './styles'
import { Movie } from '../Movies/Movie'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/movies/actions';
import { getMoviesSelector } from '../../store/movies/selectors';



export const Tabs: FC = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMoviesSelector)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const filterGenre = (array = movies, filter: string) => {
        return (
            array.filter(item =>
                item.genres.includes(filter)
                ).map(movie =>
                    <Movie
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
                    {movies.map(movie =>
                        <Movie
                            key={movie.id}
                            genre={movie.genres.join(', ')}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date?.substring(0, 4)}
                            overview={movie.overview}
                            runtime={movie.runtime}
                        />
                    )}
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

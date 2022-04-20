import React, { FC, useEffect, useState } from 'react'
import { STabs, STabList, STab, STabPanel, MoviesLimitButton } from './styles'
import { MovieCard } from '../Movies/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/movies/actions';
import { getMoviesSelector } from '../../store/movies/selectors';
import { MovieList } from '../Movies/MovieList';

export const Tabs: FC = () => {
    const dispatch = useDispatch();

    const [limit, setLimit] = useState<number>(0)

    useEffect(() => {
        dispatch(fetchMovies({ moviesLimit: limit }))
    }, [limit])

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
                    
                </STabPanel>
                <STabPanel>
                    
                </STabPanel>
                <STabPanel>
                   
                </STabPanel>
                <STabPanel>
                    
                </STabPanel>

            </STabs>
        </>
    )
}

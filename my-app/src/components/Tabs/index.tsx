import React, { FC } from 'react'
import { MovieList } from '../Movies/MovieList'
import { STabs, STabList, STab, STabPanel } from './styles'
import { movies } from '../Movies/MovieList'
import { Movie } from '../Movies/Movie'


interface IMovie {
    imageUrl: string;
    title: string;
    id: string;
    genre: string;
    year: number;
}

export const Tabs: FC = () => {
    const filterGenre = (array: IMovie[], filter: string) => {
        return (
            array.filter(item =>
                item.genre.toLowerCase() === filter
            ).map(movie =>
                <Movie
                    genre={movie.genre}
                    id={movie.id}
                    imageUrl={movie.imageUrl}
                    title={movie.title}
                    year={movie.year} />
            ))
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
                            genre={movie.genre}
                            id={movie.id}
                            imageUrl={movie.imageUrl}
                            title={movie.title}
                            year={movie.year} />
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

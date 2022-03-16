import React, { FC } from 'react'
import { MovieDesc, MovieGenre, MovieImage, MovieTitle, MovieWrapper, MovieYear } from './styles';

interface MovieProps {
    imageUrl: string;
    title: string;
    id: string;
    genre: string;
    year: number;
}

export const Movie: FC<MovieProps> = ({imageUrl, id, genre, title, year}) => {
  return (
    <>
        <MovieWrapper id={id}>
            <img src={imageUrl} alt=""  style={{width: '300px'}}/>
            <MovieDesc>
                <div>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieGenre>{genre}</MovieGenre>
                </div>
                <MovieYear>{year}</MovieYear>
            </MovieDesc>
        </MovieWrapper>
    </>
  )
}

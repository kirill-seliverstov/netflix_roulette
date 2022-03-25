import React from 'react'
import { Movie } from '../Movie';
import { MoviesWrapper } from './styles';

interface IMovie {
    imageUrl: string;
    title: string;
    id: string;
    genre: string;
    year: number;
}

// export const movies: Array<IMovie> = [
//     {
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
//         title: 'Bill: Vol 2',
//         id: '1',
//         genre: 'Oscar winning Movie',
//         year: 1994
//     },
//     {
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
//         title: 'Bill: Vol 2',
//         id: '2',
//         genre: 'Documentary',
//         year: 1994
//     },
//     {
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
//         title: 'Bill: Vol 2',
//         id: '3',
//         genre: 'Crime',
//         year: 1994
//     },
//     {
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
//         title: 'Bill: Vol 2',
//         id: '4',
//         genre: 'Comedy',
//         year: 1994
//     },
// ]

// export const MovieList = () => {
//     return (
//         <MoviesWrapper>
//             {movies.map(movie =>
//                     <Movie
//                         genre={movie.genre}
//                         id={movie.id}
//                         imageUrl={movie.imageUrl}
//                         title={movie.title}
//                         year={movie.year} />
//             )}
//         </MoviesWrapper>
//     )
// }

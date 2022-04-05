import React from 'react'
import { useSelector } from 'react-redux'
import { getMovieDescritionSelector } from '../../../store/movies/selectors'
import { MovieDescriptionDuration, MovieDescriptionGenres, MovieDescriptionItem, MovieDescriptionOverview, MovieDescriptionRating, MovieDescriptionReleaseDate, MovieDescriptionTitle, MovieDescriptionWrapper, MovieHeader } from './styles'

export const MovieDescription = () => {
    const description = useSelector(getMovieDescritionSelector)

    if (description !== null) {
        return (
            <MovieDescriptionWrapper>
                    <img
                        src={description.poster_path}
                        alt="poster"
                        onError={(e) => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Question_mark_%28black_on_white%29.png"
                        }}
                        style={{ width: '15%' }}
                    />

                <MovieDescriptionItem>
                    <MovieHeader>
                        <MovieDescriptionTitle>
                            {description.title}
                        </MovieDescriptionTitle>

                        <MovieDescriptionRating
                            color=
                            {
                                description.vote_average !== undefined && description.vote_average > 2.5 ? 'green' : 'yellow'
                            }
                        >
                            {description.vote_average}
                        </MovieDescriptionRating>
                    </MovieHeader>

                    <MovieDescriptionGenres>
                        {description.genres}
                    </MovieDescriptionGenres>

                    <div style={{display: 'flex'}}>
                        <MovieDescriptionReleaseDate>
                            {description.release_date}
                        </MovieDescriptionReleaseDate>

                        <MovieDescriptionDuration>
                            {description.runtime} min
                        </MovieDescriptionDuration>
                    </div>

                    <MovieDescriptionOverview>
                        {description.overview}
                    </MovieDescriptionOverview>
                </MovieDescriptionItem>
            </MovieDescriptionWrapper>
        )
} else {
    return null
}

}

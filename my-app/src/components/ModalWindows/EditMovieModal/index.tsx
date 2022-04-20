import React, { FC } from 'react'
import { StyledForm, StyledLabel, StyledInput, StyledSelect, ButtonsWrapper, ResetButton, SubmitButton } from './styles'
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/actions';

interface IEditMovieModalProps {
    onConfirm: () => void;
    title: string;
    id: string | number;
    genre: string[] | string;
    year: string | undefined;
    overview: string | undefined;
    runtime: number | null | undefined;
    poster_path: string;
}

interface MovieValues {
    title: string,
    release_date: string | undefined,
    poster_path: string,
    genres: string | string[],
    overview: string | undefined,
    runtime: number | null | undefined,
    id: string | number
}

export const EditMovieModal: FC<IEditMovieModalProps> = (props) => {

    const dispatch = useDispatch();

    const options = [
        { value: 'documentary' },
        { value: 'comedy' },
        { value: 'horror' },
        { value: 'crime' },
    ]

    const initialValues: MovieValues = {
        title: props.title,
        release_date: props.year,
        poster_path: props.poster_path,
        genres: props.genre,
        overview: props.overview,
        runtime: props.runtime,
        id: props.id
    }

    async function editMovie(movie: MovieValues) {
        await axios.put('http://localhost:4000/movies', movie)
    }

    const submitForm = (movie: MovieValues) => {
        console.log(movie);
        editMovie(movie)
        props.onConfirm()
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        overview: Yup.string().required('Required'),
        genres: Yup.array().required('Select at least one genre to proceed'),
        runtime: Yup.number().required('Required'),
        poster_path: Yup.string().required('Required'),
        release_date: Yup.date().max(new Date())
    })


    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={submitForm}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <StyledForm>
                        <StyledLabel htmlFor="title">
                            Title
                            <StyledInput name="title" type='text' placeholder='Movie Title' />
                        </StyledLabel>

                        <StyledLabel htmlFor='release_date'>
                            Release date
                            <StyledInput name="release_date" type='date' placeholder='Select Date' />
                        </StyledLabel>

                        <StyledLabel htmlFor="poster_path">
                            Poster Path
                            <StyledInput name="poster_path" type='text' placeholder='Movie URL here' />
                        </StyledLabel>

                        <StyledLabel>
                            Genre
                            {options.map(option =>
                                <StyledLabel key={option.value} htmlFor='genres' color='#ffffff'>
                                    <Field type="checkbox" name="genres" value={option.value}/>
                                    {option.value}
                                </StyledLabel>
                            )}
                        </StyledLabel>

                        <StyledLabel htmlFor='overview'>
                            Overview
                            <StyledInput name="overview" type='text' placeholder='Overview here' />
                        </StyledLabel>

                        <StyledLabel htmlFor='runtime'>
                            Runtime
                            <StyledInput name="runtime" type='text' placeholder='Runtime here' />
                        </StyledLabel>
                        <ButtonsWrapper>
                            <ResetButton>Reset</ResetButton>
                            <SubmitButton type='submit'>Submit</SubmitButton>
                        </ButtonsWrapper>
                    </StyledForm>
                )}
            </Formik>
        </>
    )
}

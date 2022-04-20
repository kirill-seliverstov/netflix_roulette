import React, { FC, useState } from 'react';
import { ButtonsWrapper, ResetButton, StyledForm, StyledInput, StyledLabel, StyledSelect, SubmitButton } from './styles';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../RootModal';
import { AddMovieSuccessModal } from '../AddMovieSuccessModal';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/actions';

interface AddMovieModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

interface MovieValues {
  title: string,
  release_date: string,
  poster_path: string,
  genres: string | string[],
  overview: string,
  runtime: number | string,
}

export const AddMovieModal: FC<AddMovieModalProps> = (props) => {
  const { isShown, toggle } = useModal();

  const dispatch = useDispatch()

  const options = [
    { value: 'documentary' },
    { value: 'comedy' },
    { value: 'horror' },
    { value: 'crime' },
  ]

  const initialValues: MovieValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
  }

  async function postMovie(movie: MovieValues) {
    await axios.post('http://localhost:4000/movies', movie)
  }

  const submitForm = (movie: MovieValues) => {
    postMovie(movie)
    props.onConfirm()
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    overview: Yup.string().required('Required'),
    genres: Yup.array().min(1).required('Select at least one genre to proceed'),
    runtime: Yup.number().min(0).integer().required('Required'),
    poster_path: Yup.string().required('Required'),
    release_date: Yup.date().max(new Date())
  })

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledLabel htmlFor='title'>
              Title
              <StyledInput name='title' type='text' placeholder='Movie Title' border={errors.title && touched.title ? '1px solid #f65261' : 'none'} />
            </StyledLabel>

            <StyledLabel htmlFor='release_date'>
              Release date
              <StyledInput name='release_date' type='date' placeholder='Select Date' border={errors.release_date && touched.release_date ? '1px solid #f65261' : 'none'} />
            </StyledLabel>

            <StyledLabel htmlFor='poster_path'>
              Poster Path
              <StyledInput name='poster_path' type='text' placeholder='Poster URL here' border={errors.poster_path && touched.poster_path ? '1px solid #f65261' : 'none'} />
            </StyledLabel>

            <StyledLabel>
              Genres
              {options.map(option =>
                <StyledLabel key={option.value} htmlFor='genres' color='#ffffff'>
                  <Field type="checkbox" name="genres" value={option.value} />
                  {option.value}
                </StyledLabel>
              )}
              {/* <select multiple>
                <option></option>
              </select> */}
            </StyledLabel>

            <StyledLabel htmlFor='overview'>
              Overview
              <StyledInput name='overview' type='text' placeholder='Overview here' border={errors.overview && touched.overview ? '1px solid #f65261' : 'none'} />
            </StyledLabel>

            <StyledLabel htmlFor='runtime'>
              Runtime
              <StyledInput name='runtime' type='number' placeholder='Runtime here' border={errors.runtime && touched.runtime ? '1px solid #f65261' : 'none'} />
            </StyledLabel>
            <ButtonsWrapper>
              <ResetButton type='reset'>Reset</ResetButton>
              <SubmitButton type='submit'>Submit</SubmitButton>
            </ButtonsWrapper>
          </StyledForm>
        )}

      </Formik>


      <Modal
        hide={toggle}
        isShown={isShown}
        headerText={'done'}
        modalContent={
          <AddMovieSuccessModal />
        }
      />
    </React.Fragment>
  );
};
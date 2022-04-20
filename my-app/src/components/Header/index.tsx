import React, { FC, useEffect } from 'react'
import { useModal } from '../../hooks/useModal';
import { AddMovieModal } from '../ModalWindows/AddMovieModal';
import { Logo } from '../Logo'
import { Modal } from '../ModalWindows/RootModal';
import { AddMovieBtn, HeaderWrapper, Header, SearchButton } from './styles'
import { SearchForm } from '../SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDescritionSelector } from '../../store/movies/selectors';
import { MovieDescription } from '../Movies/MovieDescription';
import { SearchSVG } from '../../assets/svg/SearchIcon';
import { fetchMovies, movieDescrition } from '../../store/movies/actions';

interface HeaderProps {

}

export const HeaderComponent: FC<HeaderProps> = () => {
  const description = useSelector(getMovieDescritionSelector)
  const dispatch = useDispatch();

  const { isShown, toggle } = useModal();
  const onCancel = () => toggle();
  
  const addMovie = () => {
    toggle();
    dispatch(fetchMovies({ moviesLimit: 0 }))
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(movieDescrition({
      description: null
    }))
  }

  return (
    <HeaderWrapper filter={
      description !== null ? 'blur(0.375rem) brightness(20%)' : 'blur(0.375rem) brightness(50%)'
    }>
      <Header>
        <Logo />
        {description === null
          ?

          <AddMovieBtn onClick={toggle}>+ Add Movie</AddMovieBtn>

          :

          <SearchButton onClick={handleSearch}>
            <SearchSVG />
          </SearchButton>
        }

        <Modal
          isShown={isShown}
          hide={toggle}
          headerText='Add movie'
          modalContent={
            <AddMovieModal
              onConfirm={addMovie}
              onCancel={onCancel}
            />
          }
        />
      </Header>

      {description === null ? <SearchForm /> : <MovieDescription />}
    </HeaderWrapper>

  )
}

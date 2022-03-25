import React, { FC, useEffect } from 'react'
import { useModal } from '../../hooks/useModal';
import { AddMovieModal } from '../ModalWindows/AddMovieModal';
import { Logo } from '../Logo'
import { Modal } from '../ModalWindows/RootModal';
import { AddMovieBtn, HeaderWrapper } from './styles'

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
  
  const { isShown, toggle } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <HeaderWrapper>
      <Logo />
      <AddMovieBtn onClick={toggle}>+ Add Movie</AddMovieBtn>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText='Add movie'
        modalContent={
          <AddMovieModal
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        }
      />
    </HeaderWrapper>
  )
}

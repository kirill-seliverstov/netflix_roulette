import React, { FC } from 'react';
import { ButtonsWrapper, ResetButton, StyledForm, StyledInput, StyledLabel, StyledSelect, SubmitButton } from './styles';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../RootModal';
import { AddMovieSuccessModal } from '../AddMovieSuccessModal';

interface AddMovieModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const AddMovieModal: FC<AddMovieModalProps> = (props) => {
  const { isShown, toggle } = useModal();

  const onReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  const addMovie = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    toggle();
    props.onConfirm()
  }

  return (
    <React.Fragment>
      <StyledForm>
        <StyledLabel>
          Title
            <StyledInput type='text' placeholder='Movie Title'/>
        </StyledLabel>

        <StyledLabel>
          Release date
          <StyledInput type='date' placeholder='Select Date' />
        </StyledLabel>

        <StyledLabel>
          Movie Url
          <StyledInput type='text' placeholder='Movie URL here' />
        </StyledLabel>

        <StyledLabel>
          Genre
          <StyledSelect>
            <option value="select-genre" disabled selected hidden>Select Genre</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </StyledSelect>
        </StyledLabel>

        <StyledLabel>
          Overview
          <StyledInput type='text' placeholder='Overview here' />
        </StyledLabel>

        <StyledLabel>
          Runtime
          <StyledInput type='text' placeholder='Runtime here' />
        </StyledLabel>
        <ButtonsWrapper>
          <ResetButton onClick={onReset}>Reset</ResetButton>
          <SubmitButton onClick={addMovie}>Submit</SubmitButton>
        </ButtonsWrapper>
      </StyledForm>
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
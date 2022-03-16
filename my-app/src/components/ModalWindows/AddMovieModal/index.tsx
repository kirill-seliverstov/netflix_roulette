import React, { FunctionComponent } from 'react';
import { ButtonsWrapper, ResetButton, StyledForm, StyledInput, StyledLabel, SubmitButton } from './styles';

interface AddMovieModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export const AddMovieModal: FunctionComponent<AddMovieModalProps> = (props) => {
  return (
    <React.Fragment>
      <StyledForm>
        <StyledLabel>
          Title
          <StyledInput type='text' placeholder='Movie Title' />
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
          Overview
          <StyledInput type='text' placeholder='Overview here' />
        </StyledLabel>

        <StyledLabel>
          Runtime
          <StyledInput type='text' placeholder='Runtime here' />
        </StyledLabel>
        <ButtonsWrapper>
          <ResetButton onClick={props.onCancel}>Reset</ResetButton>
          <SubmitButton onClick={props.onConfirm}>Submit</SubmitButton>
        </ButtonsWrapper>
      </StyledForm>
    </React.Fragment>
  );
};
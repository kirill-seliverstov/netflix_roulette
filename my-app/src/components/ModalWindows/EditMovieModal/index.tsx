import React, { FC } from 'react'
import { StyledForm, StyledLabel, StyledInput, StyledSelect, ButtonsWrapper, ResetButton, SubmitButton } from './styles'

interface IEditMovieModalProps {
    onConfirm: () => void;
    title: string;
    id: string;
    genre: string;
    year: number;
}

export const EditMovieModal: FC<IEditMovieModalProps> = (props) => {
    const onReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    return (
        <>
            <StyledForm>
                <StyledLabel>
                    Title
                    <StyledInput type='text' placeholder='Movie Title' defaultValue={props.title} />
                </StyledLabel>

                <StyledLabel>
                    Release date
                    <StyledInput type='date' placeholder='Select Date' defaultValue={props.year} />
                </StyledLabel>

                <StyledLabel>
                    Movie Url
                    <StyledInput type='text' placeholder='Movie URL here' defaultValue="www.example.com" />
                </StyledLabel>

                <StyledLabel>
                    Genre
                    <StyledSelect>
                        <option value="select-genre" disabled selected hidden>{props.genre}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </StyledSelect>
                </StyledLabel>

                <StyledLabel>
                    Overview
                    <StyledInput type='text' placeholder='Overview here' defaultValue="Overview text goes here" />
                </StyledLabel>

                <StyledLabel>
                    Runtime
                    <StyledInput type='text' placeholder='Runtime here' defaultValue="Runtime text goes here" />
                </StyledLabel>
                <ButtonsWrapper>
                    <ResetButton onClick={onReset}>Reset</ResetButton>
                    <SubmitButton onClick={props.onConfirm}>Submit</SubmitButton>
                </ButtonsWrapper>
            </StyledForm>
        </>
    )
}

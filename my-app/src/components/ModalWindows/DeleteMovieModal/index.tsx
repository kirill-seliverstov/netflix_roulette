import React from 'react'
import { Modal } from '../RootModal'
import { ConfirmationButton, ConfirmationText, DeleteMovieModalWrapper } from './styles'
import { FC } from 'react'

interface IDeleteMovieModal {
    onConfirm: (value?: React.MouseEvent<HTMLDivElement> | any) => void;
}

export const DeleteMovieModal: FC<IDeleteMovieModal> = ({ onConfirm }) => {

    return (
        <DeleteMovieModalWrapper>
            <ConfirmationText>Are you sure you want to delete this movie?</ConfirmationText>
            <ConfirmationButton onClick={onConfirm}>Confirm</ConfirmationButton>
        </DeleteMovieModalWrapper>

    )
}

import React from 'react'
import { Modal } from '../RootModal'
import { ConfirmationButton, ConfirmationText } from './styles'
import { FC } from 'react'

export const DeleteMovieModal = () => {

    return (
        <>
            <ConfirmationText>Are you sure you want to delete this movie?</ConfirmationText>
            <ConfirmationButton>Confirm</ConfirmationButton>
        </>

    )
}

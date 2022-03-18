import React, { FC, useState } from 'react'
import { DeleteControl, ControlButton, ShowControls, MovieControlsWrapper, MovieDesc, MovieGenre, MovieTitle, MovieWrapper, MovieYear, HideControls } from './styles';
import threeDots from '../../../assets/images/3-dot-icon-0.jpg';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../../ModalWindows/RootModal';
import { EditMovieModal } from '../../ModalWindows/EditMovieModal';

interface MovieProps {
    imageUrl: string;
    title: string;
    id: string;
    genre: string;
    year: number;
}

export const Movie: FC<MovieProps> = ({ imageUrl, id, genre, title, year }) => {
    const { isShown, toggle } = useModal();
    const [hovered, setHovered] = useState<boolean>(false);

    const [controlsShow, setControlsShow] = useState<boolean>(false);

    const onConfirm = () => toggle();
    const onCancel = () => toggle();

    const showHover = (event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true)
    }

    const hideHover = (event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(false)
    }

    const showControls = (event: React.MouseEvent<HTMLButtonElement>) => {
        setControlsShow(true)
    }

    const hideControls = (event: React.MouseEvent<HTMLDivElement>) => {
        setControlsShow(false)
    }

    return (
        <>
            <MovieWrapper id={id} onMouseEnter={showHover} onMouseLeave={hideHover}>
                <ShowControls onClick={showControls} display={hovered ? 'block' : 'none'} />

                <MovieControlsWrapper display={controlsShow ? 'flex' : 'none'}>
                    <HideControls onClick={hideControls}>X</HideControls>
                    <ControlButton onClick={toggle}>Edit</ControlButton>
                    <DeleteControl>Delete</DeleteControl>
                </MovieControlsWrapper>

                <img src={imageUrl} alt="" style={{ width: '100%' }} />
                <MovieDesc>
                    <div>
                        <MovieTitle>{title}</MovieTitle>
                        <MovieGenre>{genre}</MovieGenre>
                    </div>
                    <MovieYear>{year}</MovieYear>
                </MovieDesc>
            </MovieWrapper>
            <Modal
                isShown={isShown}
                hide={toggle}
                modalContent={
                    <EditMovieModal
                        genre={genre}
                        id={id}
                        onCancel={onCancel}
                        onConfirm={onConfirm}
                        title={title}
                        year={year}
                    />
                } />
        </>
    )
}

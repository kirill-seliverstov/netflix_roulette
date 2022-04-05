import React, { FC, useState } from 'react'
import { DeleteControl, ControlButton, ShowControls, MovieControlsWrapper, MovieDesc, MovieGenre, MovieTitle, MovieWrapper, MovieYear, HideControls } from './styles';
import threeDots from '../../../assets/images/3-dot-icon-0.jpg';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../../ModalWindows/RootModal';
import { EditMovieModal } from '../../ModalWindows/EditMovieModal';
import { DeleteMovieModal } from '../../ModalWindows/DeleteMovieModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovieAction, movieDescrition } from '../../../store/movies/actions';
import { getMovieDescritionSelector } from '../../../store/movies/selectors';

interface MovieProps {
    imageUrl: string;
    title: string;
    id: string | number;
    genre: string | string[];
    year: string | undefined;
    overview?: string;
    runtime?: number;
    voteAverage?: number;
}

export const MovieCard: FC<MovieProps> = ({
    imageUrl,
    id,
    genre,
    title,
    year,
    overview,
    runtime,
    voteAverage
}) => {
    const dispatch = useDispatch();
    const { isShown, toggle } = useModal();
    const [hovered, setHovered] = useState<boolean>(false);
    const [controlsShow, setControlsShow] = useState<boolean>(false);
    const [deleteModalShow, setdeleteModalShow] = useState<boolean>(false);

    const description = useSelector(getMovieDescritionSelector);

    const onConfirm = () => toggle();

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

    const showDeleteModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        setdeleteModalShow(true)
    }

    const hideDeleteModal = (event: React.MouseEvent<HTMLDivElement>) => {
        setdeleteModalShow(false)
    }

    const deleteMovie = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteMovieAction({ id: id }))
    }

    const getMovieDescription = (event: React.MouseEvent<HTMLImageElement>) => {
        dispatch(movieDescrition({
            description: {
                poster_path: imageUrl,
                title: title,
                id: id,
                genres: genre,
                overview: overview,
                runtime: runtime,
                release_date: year,
                vote_average: voteAverage
            }
        }))
    }

    return (
        <MovieWrapper onMouseEnter={showHover} onMouseLeave={hideHover}>
            <ShowControls onClick={showControls} display={hovered ? 'block' : 'none'} />

            <MovieControlsWrapper display={controlsShow ? 'flex' : 'none'}>
                <HideControls onClick={hideControls}>X</HideControls>
                <ControlButton onClick={toggle}>Edit</ControlButton>
                <DeleteControl onClick={showDeleteModal}>Delete</DeleteControl>
            </MovieControlsWrapper>

            <img
                src={imageUrl}
                alt="poster"
                onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Question_mark_%28black_on_white%29.png"
                }}
                onClick={getMovieDescription}
                style={{ width: '100%', height: '53.25rem' }}
            />
            <MovieDesc>
                <div>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieGenre>{genre}</MovieGenre>
                </div>
                <MovieYear>{year}</MovieYear>
            </MovieDesc>

            <Modal
                isShown={isShown}
                hide={toggle}
                headerText={'Edit movie'}
                modalContent={
                    <EditMovieModal
                        genre={genre}
                        id={id}
                        onConfirm={onConfirm}
                        title={title}
                        year={year}
                        overview={overview}
                        runtime={runtime}
                    />
                } />
            <Modal
                isShown={deleteModalShow}
                hide={hideDeleteModal}
                headerText={'delete movie'}
                modalContent={
                    <DeleteMovieModal
                        onConfirm={deleteMovie}
                    />
                }
            />
        </MovieWrapper>
    )
}

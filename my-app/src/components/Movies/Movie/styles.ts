import styled from "styled-components";

interface MovieControlsProps {
    display: string;
}

interface ShowControlsProps {
    display: string;
}

export const MovieWrapper = styled.div`
    margin: 2.5rem 0;

    position: relative;
`

export const ShowControls = styled.button<ShowControlsProps>`
    position: absolute;
    top: 0;
    right: 0;

    width: 0.5rem;
    height: 0.5rem;
    padding: 1rem;
    margin: 1rem;
    
    border: none;
    border-radius: 50%;

    background-color: #232323;
    color: #ffffff;

    display: ${prop => prop.display};

    cursor: pointer;
`

export const MovieControlsWrapper = styled.div<MovieControlsProps>`
    position: absolute;
    top: 1rem;
    right: 1rem;

    width: 40%;
    padding: 0.5rem 0;

    background-color: #232323;

    display: ${prop => prop.display};
    flex-direction: column;
`


export const ControlButton = styled.button`
    color: #ffffff;
    background-color: inherit;
    border: none;
    cursor: pointer;

    padding: 0.5rem 1rem;
    
    &:hover {
        background-color: #555555;
    }
`

export const DeleteControl = styled(ControlButton)`
    &:hover {
        background-color: #f65261;
    }
`


export const HideControls = styled.div`
    color: #ffffff;

    font-size: 1rem;

    align-self: flex-end;
    margin: 0 1rem;

    cursor: pointer;
`

export const MovieDesc = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
`

export const MovieTitle = styled.p`
    color: #ffffff;
    
    font-size: 1rem;
`

export const MovieGenre = styled.p`
    color: #555555;

    font-size: 0.7rem;
`

export const MovieYear = styled.p`
    align-self: flex-start;

    padding: 0.4rem;

    font-size: 0.7rem;

    color: #ffffff;

    border: 1px solid #555555;
    border-radius: 2px;
`
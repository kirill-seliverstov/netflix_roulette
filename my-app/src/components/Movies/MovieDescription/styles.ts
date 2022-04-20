import styled from "styled-components";

export const MovieDescriptionWrapper = styled.div`
    display: flex;

    padding: 1rem 2rem;
`

export const MovieDescriptionItem = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem 0rem;
    margin-left: 2rem;
`

export const MovieHeader = styled.div`
    display: flex;
    align-items: center;
`

export const MovieDescriptionTitle = styled.p`
    font-size: 2.5rem;
    color: #ffffff;

    margin-right: 1.5rem;
`

export const MovieDescriptionRating = styled.p`
    font-size: 2rem;
    color: ${props => props.color};

    border: 1px solid #ffffff;
    border-radius: 50%;

    padding: 0.6rem;
`

export const MovieDescriptionGenres = styled.p`
    font-size: 1rem;
    color: #555555;
`

export const MovieDescriptionReleaseDate = styled.p`
    font-size: 2rem;
    color: #F65261;

    margin-right: 1rem;
`

export const MovieDescriptionDuration = styled.p`
    font-size: 2rem;
    color: #F65261;
`

export const MovieDescriptionOverview = styled.p`
    font-size: 1rem;
    color: #ffffff;
`

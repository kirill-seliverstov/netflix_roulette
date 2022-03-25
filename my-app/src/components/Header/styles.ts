import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 2rem;
`

const AddMovieBtn = styled.button`
    background-color: rgba(0,0,0,0.1);

    color: #F65261;
    font-size: 1.25rem;
    text-transform: uppercase;
    
    padding: 0.5rem 1rem;

    border: none;
    border-radius: 0.25rem;
`

export {
    HeaderWrapper,
    AddMovieBtn
}
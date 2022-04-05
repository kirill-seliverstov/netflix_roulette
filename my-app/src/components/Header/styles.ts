import styled from "styled-components"

interface HeaderWrapperProps {
    filter?: string
}

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
    &::before {
        content: "";
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;

        display: block;
        background-image: url('https://ncatregister.com/wp-content/uploads/2018/12/1_few-89t3Lc5M-WG4qQ8Uqg-900x360.jpeg');
        background-size:cover;
        width: 100%;
        height: 100%;
        filter: ${(props => props.filter)};
    }

`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 2rem;


`

export const AddMovieBtn = styled.button`
    background-color: rgba(0,0,0,0.1);

    color: #F65261;
    font-size: 1.25rem;
    text-transform: uppercase;
    
    padding: 0.5rem 1rem;

    border: none;
    border-radius: 0.25rem;
`

export const SearchButton = styled.button`
    background-color: inherit;
    border: none;
`

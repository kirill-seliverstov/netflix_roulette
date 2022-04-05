import { SearchForm } from './index';
import styled from "styled-components";

const FormWrapper = styled.div`
    padding: 2rem 10rem 10rem;
`

const FormTitle = styled.p`
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    color: #ffffff;

    margin-bottom: 2rem;
`

const StyledForm = styled.form`
    display: flex;
`

const SearchInput = styled.input`
    flex: 1;

    background-color: #1c1c1ce0;

    font-size: 1rem;
    color: #ffffff;

    border: none;
    border-radius: 0.25rem;

    padding: 1rem;
    margin-right: 0.5rem;

    &:focus {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: #555555;
    }
`

const SearchButton = styled.button`
    background-color: #F65261;
    
    font-size: 1rem;
    color: #ffffff;
    text-transform: uppercase;

    padding: 0.7rem 2rem;

    border: none;
    border-radius: 0.25rem;
`

export {
    FormTitle,
    StyledForm,
    SearchInput,
    SearchButton,
    FormWrapper
}


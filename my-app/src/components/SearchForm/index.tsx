import React, { FC } from 'react'
import {
  FormTitle,
  SearchButton,
  SearchInput,
  StyledForm,
  FormWrapper
} from './styles'

export const SearchForm: FC = () => {
  return (
    <FormWrapper>
      <FormTitle>Find your movie</FormTitle>
      <StyledForm>
        <SearchInput type="text" placeholder='What do you want to watch?' />
        <SearchButton>Search</SearchButton>
      </StyledForm>
    </FormWrapper>
  )
}

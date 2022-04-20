import styled from 'styled-components';
import { Form, Field } from 'formik';

interface StyledInputProps {
  border?: string
}

interface StyledLabelProps {
  color?: string
}

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;

  margin-bottom: 0.5rem;

  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${props => props.color || '#f65261'};
`

export const StyledInput = styled(Field)<StyledInputProps>`
  display: block;
  width: 95%;

  background-color: rgba(0,0,0,0.3);

  font-size: 1rem;
  color: #ffffff;

  border: ${props => props.border || 'none'} ;
  border-radius: 0.25rem;

  padding: 1rem;
  margin: 1rem 0;

  &:focus {
      border: none;
      outline: none;
  }

  &::placeholder {
      color: #555555;
  }
`

export const StyledSelect = styled.select`
  display: block;
  width: 100%;

  background-color: rgba(0,0,0,0.3);

  font-size: 1rem;
  color: #ffffff;

  border: none;
  border-radius: 0.25rem;

  padding: 1rem;
  margin: 1rem 0;

  &:focus {
      border: none;
      outline: none;
  }

  &::placeholder {
      color: #555555;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;

  margin-bottom: 2rem;
`;

export const SubmitButton = styled.button`
  background-color: #f65261;
  color: #ffffff;

  border: 1px solid #f65261;
  border-radius: 0.25rem;

  padding: 1rem 2.5rem;

  font-size: 1rem;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;

export const ResetButton = styled.button`
  margin-right: 0.5rem;
  
  background-color: inherit;
  color: #f65261;

  border: 1px solid #f65261;
  border-radius: 0.25rem;

  padding: 1rem 2.5rem;
  
  font-size: 1rem;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;
import styled from 'styled-components'

export const InputRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #00224d60;
  padding-left: 0.6rem;
  border-radius: 0.3rem;
`

export const InputStyled = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.6rem;
  padding-left: 0;
  font-size: 1.1rem;
  color: #fefbf6;
  outline: none;

  &::placeholder {
    color: #fefbf680;
  }
`

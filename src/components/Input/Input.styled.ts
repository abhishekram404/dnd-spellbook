import styled from "styled-components";

export const InputStyled = styled.input`
  background: #00224d60;
  border: none;
  font-size: 1.1rem;
  padding: 0.6rem;
  border-radius: 0.3rem;
  color: #fefbf6;

  &:focus {
    outline: 2px solid #00224dba;
  }

  &::placeholder {
    color: #fefbf680;
  }
`;

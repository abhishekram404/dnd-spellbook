import React from "react";
import styled from "styled-components";

export type DropdownOption = {
  label: string;
  value: string | number;
};

type Props = {
  title: string;
  options: DropdownOption[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ title, options, onChange }: Props) => {
  return (
    <Root>
      <label htmlFor="dropdown">{title}</label>
      <StyledSelect id="dropdown" onChange={onChange} defaultValue={"default"}>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Root>
  );
};

export default Dropdown;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fefbf6;
`;
const StyledSelect = styled.select`
  background-color: transparent;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  color: #fefbf6;

  &:focus {
    outline: 1px solid #ccc;
  }
`;

const StyledOption = styled.option`
  padding: 10px 15px;
`;

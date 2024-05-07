import React from "react";
import styled from "styled-components";

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked?: boolean;
} & React.HTMLAttributes<HTMLInputElement>) {
  return (
    <CheckboxLabel>
      <StyledCheckbox checked={checked} onChange={onChange} /> {label}
    </CheckboxLabel>
  );
}

export default Checkbox;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  background-color: #fefbf6ba;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fefbf69a;
  & > ${StyledCheckbox} {
    margin-right: 5px;
  }
`;

import React from "react";
import { InputStyled } from "./Input.styled";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};
export const Input = (props: Props) => {
  return <InputStyled {...props} />;
};

export default Input;

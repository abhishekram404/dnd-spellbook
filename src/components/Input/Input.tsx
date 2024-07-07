import React, { ReactNode } from 'react'
import { InputRoot, InputStyled } from './Input.styled'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}
export function Input(props: Props) {
  const { leftIcon, rightIcon, ...restProps } = props
  return (
    <InputRoot>
      {leftIcon}
      <InputStyled {...restProps} />
      {rightIcon}
    </InputRoot>
  )
}

export default Input

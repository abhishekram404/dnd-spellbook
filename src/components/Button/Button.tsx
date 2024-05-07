import React from "react";
import { StyledButton } from "./Button.styled";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "default" | "link";
};

export default function Button({
  children,
  variant = "default",
  ...rest
}: Props) {
  return (
    <StyledButton $isLink={variant === "link"} {...rest}>
      {children}
    </StyledButton>
  );
}

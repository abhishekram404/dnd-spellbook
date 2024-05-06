import React from "react";
import { StyledButton } from "./Button.styled";

type Props = {
  children: React.ReactNode;
  variant: "default" | "link";
};

export default function Button({ children, variant }: Props) {
  return <StyledButton isLink={variant === "link"}>{children}</StyledButton>;
}

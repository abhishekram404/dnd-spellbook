import React, { PropsWithChildren } from "react";

export const BoldItalic = ({
  children,
  ...props
}: PropsWithChildren & React.HTMLAttributes<HTMLParagraphElement>) => (
  <b {...props}>
    <i>{children}</i>
  </b>
);

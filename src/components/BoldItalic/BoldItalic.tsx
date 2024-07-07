import React, { PropsWithChildren } from 'react'

export function BoldItalic({
  children,
  ...props
}: PropsWithChildren & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <b {...props}>
      <i>{children}</i>
    </b>
  )
}

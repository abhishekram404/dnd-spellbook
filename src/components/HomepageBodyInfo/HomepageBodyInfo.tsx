import { Text } from '@pages/SpellDetails/SpellDetails.styled'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export default function HomepageBodyInfo({ children }: PropsWithChildren) {
  return (
    <Root>
      <Text>{children}</Text>
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`

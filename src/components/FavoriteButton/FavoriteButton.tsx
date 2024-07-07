import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const OUTLINED = 'material-symbols:favorite-outline'
const FILLED = 'material-symbols:favorite'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isFavorite: boolean
}
export default function FavoriteButton({ isFavorite, ...props }: Props) {
  return (
    <Root $isFavorite={isFavorite} role="button" {...props}>
      <Icon
        icon={isFavorite ? FILLED : OUTLINED}
        fontSize={22}
        color={isFavorite ? '#ef423f' : '#fefbf6'}
      />
    </Root>
  )
}

const Root = styled.button<{ $isFavorite?: boolean }>`
  padding: 0.5rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 0.2s all linear;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.$isFavorite ? '#fefbf6' : '#ef423f')};
  }
`

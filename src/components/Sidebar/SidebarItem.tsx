import FavoriteButton from '@components/FavoriteButton/FavoriteButton'
import { SidebarItemStyled, SidebarItemTitle } from './Sidebar.styled'
export type SidebarItemType = {
  index: string
  level: number
  name: string
  url: string
}

type Props = SidebarItemType & {
  isActive?: boolean
  isFavorite?: boolean
  onFavoriteClick?: VoidFunction
}

export default function SidebarItem(props: Props) {
  const { name, isActive, index, isFavorite, onFavoriteClick } = props
  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault() // prevents the Link component from catching the click event
    e.stopPropagation() // prevents the event bubbling
    onFavoriteClick?.()
  }
  return (
    <SidebarItemStyled to={`/spells/${index}`} $isActive={isActive}>
      <SidebarItemTitle>{name}</SidebarItemTitle>
      <FavoriteButton isFavorite={!!isFavorite} onClick={handleFavorite} />
    </SidebarItemStyled>
  )
}

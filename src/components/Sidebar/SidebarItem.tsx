import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { SidebarItemStyled, SidebarItemTitle } from "./Sidebar.styled";
export type SidebarItemType = {
  index: string;
  level: number;
  name: string;
  url: string;
};

type Props = SidebarItemType & {
  onClick?: VoidFunction;
  onFavoriteClick?: VoidFunction;
};

export default function SidebarItem(props: Props) {
  const { name, onClick, onFavoriteClick } = props;
  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents the Link component from catching the click event
    e.stopPropagation(); // prevents the event bubbling
    onFavoriteClick?.();
  };
  return (
    <SidebarItemStyled onClick={onClick}>
      <SidebarItemTitle>{name}</SidebarItemTitle>
      <FavoriteButton isFavorite={false} onClick={handleFavorite} />
    </SidebarItemStyled>
  );
}

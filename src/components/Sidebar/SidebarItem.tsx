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
    e.stopPropagation();
    onFavoriteClick?.();
  };
  return (
    <SidebarItemStyled onClick={onClick}>
      <SidebarItemTitle>{name}</SidebarItemTitle>
      <FavoriteButton isFavorite={false} onClick={handleFavorite} />
    </SidebarItemStyled>
  );
}

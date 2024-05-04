import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { SidebarItemStyled, SidebarItemTitle } from "./Sidebar.styled";
export type SidebarItemType = {
  index: string;
  level: number;
  name: string;
  url: string;
};

type Props = SidebarItemType & {};

export default function SidebarItem(props: Props) {
  const { index, level, name, url } = props;
  return (
    <SidebarItemStyled>
      <SidebarItemTitle>{name}</SidebarItemTitle>
      <FavoriteButton isFavorite={false} />
    </SidebarItemStyled>
  );
}

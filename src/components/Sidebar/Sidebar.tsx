import { SidebarStyled } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
};
export default function Sidebar(props: Props) {
  const { options, onItemSelect, onFavorite } = props;
  return (
    <SidebarStyled>
      {options?.map((item) => (
        <SidebarItem
          {...item}
          onClick={() => onItemSelect?.(item)}
          onFavoriteClick={() => onFavorite?.(item)}
        />
      ))}
    </SidebarStyled>
  );
}

import { Link, useParams } from "react-router-dom";
import { SidebarStyled } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
};
export default function Sidebar(props: Props) {
  const { index } = useParams();
  const { options, onItemSelect, onFavorite } = props;
  return (
    <SidebarStyled>
      {options?.map((item) => (
        <Link to={`/spells/${item.index}`}>
          <SidebarItem
            {...item}
            onFavoriteClick={() => onFavorite?.(item)}
            isActive={index === item.index}
          />
        </Link>
      ))}
    </SidebarStyled>
  );
}

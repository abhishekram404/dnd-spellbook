import { Link, useParams } from "react-router-dom";
import { SidebarStyled } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";
import { QueryCache } from "@tanstack/react-query";

type Props = {
  options: SidebarItemType[];
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
};
const queryCache = new QueryCache();

export default function Sidebar(props: Props) {
  const { index } = useParams();
  const { options, onItemSelect, onFavorite } = props;
  const query = queryCache.find({
    queryKey: ["search-results"]
  });
  console.log('results',query);
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

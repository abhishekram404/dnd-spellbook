import { Link, useParams } from "react-router-dom";
import { SidebarStyled, SidebarSubtitle } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
  searchedQuery?: string;
  isLoading?: boolean;
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
};

export default function Sidebar(props: Props) {
  const { index } = useParams();
  const { options, searchedQuery, isLoading, onItemSelect, onFavorite } = props;

  return (
    <SidebarStyled>
      {isLoading ? (
        <SidebarSubtitle>Loading...</SidebarSubtitle>
      ) : !options?.length ? (
        <SidebarSubtitle>No results found</SidebarSubtitle>
      ) : (
        <>
          {searchedQuery?.trim() && (
            <SidebarSubtitle>
              Showing results for{" "}
              <i>
                <b>{searchedQuery}</b>
              </i>
            </SidebarSubtitle>
          )}
          {options?.map((item) => (
            <Link to={`/spells/${item.index}`}>
              <SidebarItem
                {...item}
                onFavoriteClick={() => onFavorite?.(item)}
                isActive={index === item.index}
              />
            </Link>
          ))}
        </>
      )}
    </SidebarStyled>
  );
}

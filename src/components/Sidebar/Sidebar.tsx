import { Link, useParams } from "react-router-dom";
import { BoldItalic } from "../BoldItalic/BoldItalic";
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
  const { options, searchedQuery, isLoading, onFavorite } = props;

  return (
    <SidebarStyled>
      {isLoading ? (
        <SidebarSubtitle>Loading...</SidebarSubtitle>
      ) : !options?.length ? (
        <SidebarSubtitle>
          No results found for <BoldItalic>{searchedQuery}</BoldItalic>
        </SidebarSubtitle>
      ) : (
        <>
          {searchedQuery?.trim() && (
            <SidebarSubtitle>
              Showing results for{" "}
              <BoldItalic title={searchedQuery}>{searchedQuery}</BoldItalic>
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

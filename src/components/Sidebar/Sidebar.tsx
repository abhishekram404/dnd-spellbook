import { useParams } from "react-router-dom";
import { BoldItalic } from "../BoldItalic/BoldItalic";
import { SidebarNoResult } from "./Sidebar.components";
import { SidebarStyled, SidebarSubtitle } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
  searchedQuery?: string;
  isLoading?: boolean;
  favoriteSpells?: string[];
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
  onClearSearch?: VoidFunction;
};

export default function Sidebar(props: Props) {
  const { index } = useParams();
  const {
    options,
    searchedQuery,
    isLoading,
    favoriteSpells,
    onFavorite,
    onClearSearch,
  } = props;

  return (
    <SidebarStyled>
      {isLoading ? (
        <SidebarSubtitle>Loading...</SidebarSubtitle>
      ) : !options?.length ? (
        <SidebarNoResult
          searchQuery={searchedQuery}
          onClearSearch={onClearSearch}
        />
      ) : (
        <>
          {searchedQuery?.trim() && (
            <SidebarSubtitle>
              Showing results for{" "}
              <BoldItalic title={searchedQuery}>{searchedQuery}</BoldItalic>
            </SidebarSubtitle>
          )}
          {options?.map((item) => (
            <SidebarItem
              {...item}
              onFavoriteClick={() => onFavorite?.(item)}
              isActive={index === item.index}
              isFavorite={favoriteSpells?.includes(item.index)}
            />
          ))}
        </>
      )}
    </SidebarStyled>
  );
}

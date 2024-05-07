import { useParams } from "react-router-dom";
import { Filters } from "../../lib/providers/FiltersProvider";
import { SidebarFilterStatus, SidebarNoResult } from "./Sidebar.components";
import { SidebarStyled, SidebarSubtitle } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
  searchedQuery?: string;
  isLoading?: boolean;
  favoriteSpells?: string[];
  filters?: Filters;
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
    filters,
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
          {/* shows the applied filters status. e.g. searched query, applied filter chips */}
          <SidebarFilterStatus
            searchQuery={searchedQuery}
            resultsCount={options?.length}
            filters={filters}
          />

          {/* shows list of spells */}
          {options?.map((item) => (
            <SidebarItem
              {...item}
              key={item.index}
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

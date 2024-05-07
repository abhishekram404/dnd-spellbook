import { Icon } from "@iconify/react/dist/iconify.js";
import { BoldItalic } from "../BoldItalic/BoldItalic";
import Button from "../Button/Button";
import {
  FilterTag,
  FilterTagsGroup,
  SidebarFilterStatusStyled,
  SidebarSubtitle,
} from "./Sidebar.styled";
import { Filters } from "../../lib/providers/FiltersProvider";

export const SidebarNoResult = ({
  searchQuery,
  onClearSearch,
}: {
  searchQuery?: string;
  onClearSearch?: VoidFunction;
}) => {
  return (
    <SidebarSubtitle>
      No results found for <BoldItalic>{searchQuery}</BoldItalic>
      <br />
      <Button variant="link" onClick={onClearSearch}>
        <Icon icon={"mdi:clear-outline"} />
        Clear search
      </Button>
    </SidebarSubtitle>
  );
};

type SidebarFilterStatusProps = {
  searchQuery?: string;
  resultsCount?: number;
  filters?: Filters;
};

export const SidebarFilterStatus = ({
  searchQuery,
  resultsCount,
  filters = {},
}: SidebarFilterStatusProps) => {
  const filtersArray = Object.entries(filters)
    .filter((a) => a[1])
    .map(([key, value]) => ({
      key,
      value,
    }));
  return (
    <SidebarFilterStatusStyled>
      {searchQuery?.trim() && (
        <SidebarSubtitle>
          Showing {resultsCount} results for{" "}
          <BoldItalic title={searchQuery}>{searchQuery}</BoldItalic>
        </SidebarSubtitle>
      )}

      {filtersArray.length > 0 && (
        <FilterTagsGroup>
          {filtersArray.map((filter) => (
            <FilterTag>
              {filter.key}: {filter.value}
            </FilterTag>
          ))}
        </FilterTagsGroup>
      )}
    </SidebarFilterStatusStyled>
  );
};

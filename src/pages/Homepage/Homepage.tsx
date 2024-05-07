import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import useDebouncedValue from "../../lib/hooks/useDebouncedValue";
import useFavoriteSpells from "../../lib/hooks/useFavoriteSpells";
import useFilters from "../../lib/hooks/useFilters";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";

export default function Homepage() {
  const {
    filters,
    showFavoritesOnly,
    showFiltersSection,
    setFilters,
    setShowFavoritesOnly,
  } = useFilters();
  const { favorites, markSpellAsFavorite } = useFavoriteSpells();
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebouncedValue(searchQuery, 400);
  const debouncedSearchQueryTrimmed = debouncedSearchQuery.trim();

  const { spells, isSpellsLoading } = useSpells({
    searchQuery: debouncedSearchQueryTrimmed,
    filters,
    showFavoritesOnly,
    favorites,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilters?.({});
    setShowFavoritesOnly?.(false);
  };

  return (
    <HomepageStyled>
      <Topbar />
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <HomepageBodyStyled $showFiltersSection={showFiltersSection}>
        {showFiltersSection && <FiltersSidebar />}
        <Sidebar
          options={spells}
          searchedQuery={debouncedSearchQueryTrimmed}
          isLoading={isSpellsLoading}
          favoriteSpells={favorites}
          filters={filters}
          onFavorite={(item) => markSpellAsFavorite(item.index)}
          onClearSearch={handleClearSearch}
        />
        <Outlet />
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}

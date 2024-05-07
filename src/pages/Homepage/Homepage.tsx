import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useDebouncedValue from "../../lib/hooks/useDebouncedValue";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";
import useFavoriteSpells from "../../lib/hooks/useFavoriteSpells";

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 400);
  const debouncedSearchQueryTrimmed = debouncedSearchQuery.trim();

  const { spells, searchResults, isSpellsLoading } = useSpells({
    searchQuery: debouncedSearchQueryTrimmed,
  });

  const { favorites, markSpellAsFavorite } = useFavoriteSpells();

  const searchResultsArr = searchResults?.results?.length
    ? searchResults?.results
    : [];
  const sidebarOptions = debouncedSearchQueryTrimmed
    ? searchResultsArr
    : spells?.results;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <HomepageStyled>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <HomepageBodyStyled>
        <Sidebar
          options={sidebarOptions}
          searchedQuery={debouncedSearchQueryTrimmed}
          isLoading={isSpellsLoading}
          favoriteSpells={favorites}
          onFavorite={(item) => markSpellAsFavorite(item.index)}
          onClearSearch={handleClearSearch}
        />
        <Outlet />
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}

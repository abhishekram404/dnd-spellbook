import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useDebouncedValue from "../../lib/hooks/useDebouncedValue";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 400);
  const debouncedSearchQueryTrimmed = debouncedSearchQuery.trim();

  const {
    spells,
    searchResults,
    isSpellsLoading,
    favoriteSpells,
    markSpellAsFavorite,
  } = useSpells({
    searchQuery: debouncedSearchQueryTrimmed,
  });

  const searchResultsArr = searchResults?.results?.length
    ? searchResults?.results
    : [];
  const sidebarOptions = debouncedSearchQueryTrimmed
    ? searchResultsArr
    : spells?.results;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <HomepageStyled>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <HomepageBodyStyled>
        <Sidebar
          options={sidebarOptions}
          searchedQuery={debouncedSearchQueryTrimmed}
          isLoading={isSpellsLoading}
          onFavorite={(item) => markSpellAsFavorite(item.index)}
          favoriteSpells={favoriteSpells}
        />
        <div>
          <Outlet />
        </div>
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}

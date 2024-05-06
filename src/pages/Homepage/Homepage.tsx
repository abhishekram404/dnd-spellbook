import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";
import React, { useState } from "react";
import useDebouncedValue from "../../lib/hooks/useDebouncedValue";

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 400);
  const { spells, searchResults } = useSpells({
    searchQuery: debouncedSearchQuery,
  });
  const searchResultsArr = searchResults?.results;

  const sidebarOptions = searchResultsArr?.length
    ? searchResultsArr
    : spells?.results;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  console.log({ searchResults });
  return (
    <HomepageStyled>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <HomepageBodyStyled>
        <Sidebar
          options={sidebarOptions}
          onFavorite={(item) => console.log("favorite", item)}
        />
        <div>
          <Outlet />
        </div>
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}

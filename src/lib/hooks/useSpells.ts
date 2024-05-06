import { useQuery } from "@tanstack/react-query";
import { fetchSpells } from "../services/fetchSpells";
import { searchSpellByName } from "../services/searchSpellByName";
import { LocalStorageService } from "../services/LocalStorageService";
import { useEffect, useState } from "react";

export default function useSpells({
  searchQuery = "",
}: {
  searchQuery: string;
}) {
  const initialFavoriteSpells =
    LocalStorageService.get<string[]>("favorite-spells");

  const [favorites, setFavorites] = useState(initialFavoriteSpells || []);

  // fetch all spells
  const { data, isLoading: isSpellsLoading } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  // search spells by name
  const { data: searchResults, isLoading: isSearchResultsLoading } = useQuery({
    queryKey: ["search-results", searchQuery],
    queryFn: () => searchSpellByName(searchQuery),
    enabled: !!searchQuery?.trim(),
  });

  const removeSpellFromFavorites = (index: string) => {
    setFavorites((prev) => prev.filter((item) => item !== index));
  };

  const markSpellAsFavorite = (index: string) => {
    const doesAlreadyExist = favorites.includes(index);

    if (doesAlreadyExist) removeSpellFromFavorites(index);
    else setFavorites((prev) => [...prev, index]);
  };

  useEffect(() => {
    LocalStorageService.set("favorite-spells", favorites);
  }, [favorites]);

  return {
    spells: data,
    searchResults,
    isSpellsLoading: isSpellsLoading || isSearchResultsLoading,
    favoriteSpells: favorites,
    markSpellAsFavorite,
  };
}

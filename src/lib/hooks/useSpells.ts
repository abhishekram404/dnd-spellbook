import { useQuery } from "@tanstack/react-query";
import { fetchSpells } from "../services/fetchSpells";
import { searchSpellByName } from "../services/searchSpellByName";

export default function useSpells({
  searchQuery = "",
}: {
  searchQuery: string;
}) {
  // fetch all spells
  const { data, isFetching: isSpellsLoading } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  // search spells by name
  const { data: searchResults, isLoading: isSearchResultsLoading } = useQuery({
    queryKey: ["search-results", searchQuery],
    queryFn: () => searchSpellByName(searchQuery),
    enabled: !!searchQuery?.trim(),
  });

  return {
    spells: data,
    searchResults,
    isSpellsLoading: isSpellsLoading || isSearchResultsLoading,
  };
}

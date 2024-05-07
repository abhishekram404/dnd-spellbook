import { useQuery } from "@tanstack/react-query";
import { fetchSpells } from "../services/fetchSpells";

type Props = {
  searchQuery: string;
  filters?: {
    school?: string;
    level?: string | number;
  };
};

export default function useSpells({ searchQuery = "", filters }: Props) {
  // fetch all spells, also supports params like: name, school, level
  const { data, isLoading: isSpellsLoading } = useQuery({
    queryKey: ["spells", searchQuery, filters],
    queryFn: () =>
      fetchSpells({
        name: searchQuery || undefined,
        school: filters?.school || undefined,
        level: filters?.level || undefined,
      }),
  });

  return {
    spells: data?.results,
    isSpellsLoading: isSpellsLoading,
  };
}

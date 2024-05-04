import { useQuery } from "@tanstack/react-query";
import { fetchSpells } from "../services/fetchSpells";

export default function useSpells() {
  const { data, isFetching: isSpellsLoading } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  return {
    spells: data,
    isSpellsLoading,
  };
}

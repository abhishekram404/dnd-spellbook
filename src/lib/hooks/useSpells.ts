import { useQuery } from "@tanstack/react-query";
import { fetchSpells } from "../services/fetchSpells";

export default function useSpells() {
  const { data } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  return {
    data,
  };
}

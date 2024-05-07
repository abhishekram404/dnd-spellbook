import { useContext } from "react";
import { FiltersContext } from "../providers/FiltersProvider";

export default function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  return {
    filters,
    setFilters,
  };
}

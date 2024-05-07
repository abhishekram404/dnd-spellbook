import { useContext } from "react";
import { FiltersContext } from "../providers/FiltersProvider";

export default function useFilters() {
  const object = useContext(FiltersContext);

  return object;
}

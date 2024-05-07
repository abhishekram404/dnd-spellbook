import React, { createContext, PropsWithChildren, useState } from "react";

export type Filters = {
  school?: string;
  level?: string | number;
};

type ContextType = {
  filters?: Filters;
  showFavoritesOnly?: boolean;
  setShowFavoritesOnly?: React.Dispatch<React.SetStateAction<boolean>>;
  setFilters?: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FiltersContext = createContext<ContextType>({
  filters: {},
  showFavoritesOnly: false,
  setFilters: () => {},
  setShowFavoritesOnly: () => {},
});

export default function FiltersProvider({ children }: PropsWithChildren) {
  const [filters, setFilters] = useState<Filters>({});
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const providerValues: ContextType = {
    filters,
    showFavoritesOnly,
    setFilters,
    setShowFavoritesOnly,
  };

  return (
    <FiltersContext.Provider value={providerValues}>
      {children}
    </FiltersContext.Provider>
  );
}

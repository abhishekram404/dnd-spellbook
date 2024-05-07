import React, { createContext, PropsWithChildren, useState } from "react";

export type Filters = {
  school?: string;
  level?: string | number;
};

type ContextType = {
  filters?: Filters;
  showFavoritesOnly?: boolean;
  showFiltersSection?: boolean;
  setShowFavoritesOnly?: React.Dispatch<React.SetStateAction<boolean>>;
  setFilters?: React.Dispatch<React.SetStateAction<Filters>>;
  setShowFiltersSection: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FiltersContext = createContext<ContextType>({
  filters: {},
  showFavoritesOnly: false,
  showFiltersSection: false,
  setFilters: () => {},
  setShowFavoritesOnly: () => {},
  setShowFiltersSection: () => {},
});

export default function FiltersProvider({ children }: PropsWithChildren) {
  const [showFiltersSection, setShowFiltersSection] = useState(false);
  const [filters, setFilters] = useState<Filters>({});
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const providerValues: ContextType = {
    filters,
    showFavoritesOnly,
    showFiltersSection,
    setFilters,
    setShowFavoritesOnly,
    setShowFiltersSection,
  };

  return (
    <FiltersContext.Provider value={providerValues}>
      {children}
    </FiltersContext.Provider>
  );
}

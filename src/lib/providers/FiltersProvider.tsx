import React, { createContext, PropsWithChildren, useState } from "react";

type Filters = {
  school?: string;
  level?: string | number;
};

type ContextType = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FiltersContext = createContext<ContextType>({
  filters: {},
  setFilters: () => {},
});

export default function FiltersProvider({ children }: PropsWithChildren) {
  const [filters, setFilters] = useState<Filters>({});

  const providerValues: ContextType = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={providerValues}>
      {children}
    </FiltersContext.Provider>
  );
}

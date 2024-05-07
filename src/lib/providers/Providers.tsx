import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import FiltersProvider from "./FiltersProvider";

const queryClient = new QueryClient();

export default function Providers(props: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>{props.children}</FiltersProvider>
    </QueryClientProvider>
  );
}

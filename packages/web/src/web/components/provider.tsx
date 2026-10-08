import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Exported so the dev-only Reticle hook (src/reticle-dev.ts) can register it as a readable store.
// Nothing else should import it — components talk to it through TanStack Query's hooks.
export const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

// App-level providers — add theme/context providers here, wrapping children.
// QueryClientProvider must stay (all API calls run through TanStack Query).
export function Provider({ children }: ProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

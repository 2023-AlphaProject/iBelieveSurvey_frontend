import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      // useErrorBoundary: true,
    },
    mutations: {
      // useErrorBoundary: true,
    },
  },
});

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `MIKE` });
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>{greeting}</div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

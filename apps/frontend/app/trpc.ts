import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@server/trpc.types";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:18000/trpc", // you should update this to use env variables
    }),
  ],
});

import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "api";

const port = process.env.PORT ?? 3000;
const url = `http://localhost:${port}/api/trpc`;

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  config() {
    return {
      links: [httpBatchLink({ url })],
    };
  },
});

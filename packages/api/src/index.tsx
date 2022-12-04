import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  all: t.procedure.query(() => ["1", "2", "3", "4"]),
  byId: t.procedure
    .input((val) => {
      if (typeof val === "string") return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query(() => ["1"]),
});

export type AppRouter = typeof appRouter;

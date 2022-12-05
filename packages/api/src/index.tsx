import { initTRPC } from "@trpc/server";
import { Context } from "./context";

export * from "./context";

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  all: t.procedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  create: t.procedure.mutation(async ({ ctx }) => {
    return ctx.prisma.user.create({
      data: { email: `${Date.now()}`, name: `John Doe` },
    });
  }),
  delete: t.procedure.mutation(async ({ ctx }) => {
    return ctx.prisma.user.delete({ where: { id: 1 } });
  }),
});

export type AppRouter = typeof appRouter;

import { router, procedure } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  findAll: procedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.groceryList.findMany();
    return res;
  }),
  insertOne: procedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.groceryList.create({
        data: {
          title: input.title,
        },
      });
    }),
  updateOne: procedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        checked: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, ...rest } = input;
      return await ctx.prisma.groceryList.update({
        where: {
          id,
        },
        data: {
          ...rest,
        },
      });
    }),
  deleteAll: procedure
    .input(
      z.object({
        ids: z.number().array(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { ids } = input;

      return await ctx.prisma.groceryList.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
    }),
});

export type AppRouter = typeof appRouter;

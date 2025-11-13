// import "server-only";

// import { createHydrationHelpers } from "@trpc/react-query/rsc";
// import { headers } from "next/headers";
// import { cache } from "react";

// import { appRouter, type AppRouter } from "~/server/api/root";
// import { createTRPCContext } from "~/server/api/trpc";
// import { createQueryClient } from "./query-client";

// /**
//  * Creates the context for tRPC in RSC.
//  */
// const createContext = cache(async () => {
//   const heads = new Headers(await headers());
//   heads.set("x-trpc-source", "rsc");
//   return createTRPCContext({ headers: heads });
// });

// /**
//  * ✅ Create a synchronous wrapper that internally resolves context.
//  * This ensures `createHydrationHelpers` receives a valid caller instance.
//  */
// const getCaller = cache(async () => {
//   const ctx = await createContext();
//   return appRouter.createCaller(ctx);
// });

// /**
//  * ✅ Pass a function that resolves the caller, not an async arrow directly.
//  */
// const caller = async (...args: Parameters<ReturnType<typeof getCaller>["someMethod"]>) =>
//   (await getCaller()) as unknown; // generic-safe workaround

// const getQueryClient = cache(createQueryClient);

// /**
//  * ✅ The correct call signature.
//  */
// export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
//   await getCaller(),
//   getQueryClient,
// );

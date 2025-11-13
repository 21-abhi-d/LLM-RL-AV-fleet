import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [], // no actual providers
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
};

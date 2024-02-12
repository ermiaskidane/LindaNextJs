import { User, UserRole } from "@prisma/client";
import { getUserById } from "./data/user";
import type { NextAuthConfig } from "next-auth";

export default {
  // here generally enable creation of sessions for expirate and
  // verification of users sign in with Oauth, play with docs(https://authjs.dev/guides/basics/callbacks)
  callbacks: {
    // https://authjs.dev/guides/basics/callbacks#sign-in-callback
    async signIn({user, account}) {
      // Allow OAuth without email verification 
      if (account?.provider !== "credentials") return true;

      const existingUser  = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      return true;
    }, 
    async session({ token, session}) {
      // console.log("session", {session})
      // console.log("token", {token})

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        // @ts-ignore
        // ignore this waring cz we are customize the user property
        session.user.role = token.role as UserRole
      }
      return session;
    },
    // https://authjs.dev/guides/basics/callbacks#jwt-callback
    async jwt({token}) {
      // console.log("token", token) 
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      // if (!existingUser) throw new Error('No User Found');
      if (!existingUser) return token;

      // customize the token property
      token.role = existingUser.role
      return token
    }
  },
  providers: [],  // Empty array for providers just added for type safety purpose orginally
                  // providers are in the auth.ts
} satisfies NextAuthConfig
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "./data/user";
import { getUserById } from "./data/user"
import bcrypt from "bcryptjs";
import { UserRole } from "@prisma/client";
import authEvents from "@/auth.events"
import authCallBack from "@/auth.callBack"
// import { generateVerificationToken } from "./lib/tokens";
// import { sendVerificationEmail } from "./lib/mail";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // this page occurs if user start to create the same email using Oauth
  // we customize it else it has it's own default page
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  ...authEvents,
  ...authCallBack,
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    credentials({
      async authorize(credentials) {
        // check the incoming email and password are valid
        const validatedFields = LoginSchema.safeParse(credentials)

        if(validatedFields.success) {
           const {email, password} = validatedFields.data
        
        const user = await getUserByEmail(email);
        if(!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(
          password,
          user.password
        )

        if(passwordsMatch)  return user;
      }

      return null
    }
    })
  ],
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
});
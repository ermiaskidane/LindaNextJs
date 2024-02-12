// import type { NextAuthConfig } from "next-auth"
// import { db } from "./lib/db"
// import { sendVerificationEmail } from "./lib/mail"
// import { generateVerificationToken } from "./lib/tokens"

// export default {
//   // Events are asynchronous functions that do not return a response, they are useful for audit logs / reporting or handling any other side-effects.
//   // play with the docs(https://authjs.dev/guides/basics/events)
//   events: {
//     async signIn({user, account, profile, isNewUser}) {
//       console.log("user", user)  
//       console.log("account", account)
//       console.log("profile", profile)
//       console.log("isNewUser", isNewUser)

//       const verificationToken = await generateVerificationToken(user.email!);
//       await sendVerificationEmail(
//         verificationToken.email,
//         verificationToken.token
//       )
//     },
//     // delete user when signout
//     async signOut({token, session}) {
//       // console.log("token", token)  
//       // console.log("session", session)
//       await db.user.delete({
//         where: {id: token.sub}
//       })
//     },
//     //  linkAccount do update the emailverification for Oauth accounts(https://authjs.dev/guides/basics/events#linkaccount)
//     async linkAccount({ user, account, profile }) {
//       console.log("user", user)
//       // console.log("account", account)
//       // console.log("profile", profile)
//       await db.user.update({
//         where: { id: user.id },
//         data: { emailVerified: new Date() }
//       })
//     }
//   },
// } satisfies NextAuthConfig

import type { NextAuthConfig } from "next-auth";
import { db } from "./lib/db";
import { sendVerificationEmail } from "./lib/mail";
import { generateVerificationToken } from "./lib/tokens";

const authEvent: NextAuthConfig = {
  // Events are asynchronous functions that do not return a response, they are useful for audit logs / reporting or handling any other side-effects.
  // play with the docs(https://authjs.dev/guides/basics/events)
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      // console.log("user", user);
      // console.log("account", account);
      // console.log("profile", profile);
      // console.log("isNewUser", isNewUser);

      // const verificationToken = await generateVerificationToken(user.email!);
      // await sendVerificationEmail(
      //   verificationToken.email,
      //   verificationToken.token
      // );
    },
    // delete user when signout
    // async signOut({ token, session }) {
    //   // console.log("token", token)
    //   // console.log("session", session)
    //   // await db.user.delete({
    //   //   where: { id: token.sub }
    //   // });
    // },
    //  linkAccount do update the emailverification for Oauth accounts(https://authjs.dev/guides/basics/events#linkaccount)
    async linkAccount({ user, account, profile }) {
      console.log("user", user);
      // console.log("account", account)
      // console.log("profile", profile)
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      });
    }
  },
  providers: [], // Empty array for providers just added for type safety purpose orginally
                // providers are in the auth.ts
};

export default authEvent;

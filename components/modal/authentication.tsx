"use server";

// can be deleted
import { auth, signIn, signOut } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <p>You are not logged in</p>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}

export function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

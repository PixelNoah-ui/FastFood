"user server";

import { signIn, signOut } from "@/auth";

export const signUpButton = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const signOutButton = async () => {
  await signOut({ redirectTo: "/" });
};

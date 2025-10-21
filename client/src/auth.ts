import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getUser } from "./api/getUser";
import { createUser } from "./api/createUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: ({ auth }) => {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        if (!user.email) {
          return false;
        }
        const existingUser = await getUser(user?.email);
        if (!existingUser) {
          await createUser({
            name: user.name!,
            avatar: user.image!,
            email: user.email!,
          });
        }
        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async session({ token, session }) {
      if (token.email) {
        const user = await getUser(token.email);
        session.user.id = user?._id;
        session.user.role = user?.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signup",
  },
});

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // 👈 add your custom field
  }

  interface Session extends DefaultSession {
    user: {
      role?: string;
    } & DefaultSession["user"];
  }
}
export default NextAuth;

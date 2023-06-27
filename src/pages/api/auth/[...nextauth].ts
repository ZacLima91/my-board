import NextAuth, { DefaultSession, NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export interface ExtendsSession extends DefaultSession{
  id?: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {

      try {
        if(token && session.user){
          session.user.id = token.sub
        }
        return {
          ...session,
          id: token.sub
        }
      } catch (err) {
        return {
          ...session,
        };
      }
    },
    async signIn({ user, account, profile }) {
      const { email } = user;
      try {
        return true;
      } catch (err) {
        console.log("Deu erro", err);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

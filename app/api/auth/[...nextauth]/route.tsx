import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  session : {
    maxAge: 60 * 60 *24 ,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.role = token.email == "omegagaming.sr@gmail.com" ? "admin" : "viewer";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.role = token.role;
      }
      return session;
    },
  },

};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

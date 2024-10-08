import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { connectDb } from "@/utils/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDb();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "google") {
        await connectDb();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              fullName: user.name,
              plan: "free",
            });
            await newUser.save();
            return true;
          }
          return true;
        } catch (error) {
          console.log("Error while saving user while OAuth");
        }
      }
    },
    async session({ session, token }) {
      //getting google auth users plan from db
      let plan = "";
      if (token.provider == "google") {
        const sessionUser = await User.findOne({ email: session.user.email });
        plan = sessionUser.plan;
      } else {
        plan = token.plan;
      }
      //setting up session data from database
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.plan = plan;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
        token.email = user.email;
        token.plan = user.plan;
        token.provider = account.provider;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

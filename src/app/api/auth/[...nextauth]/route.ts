import NextAuth, { Session } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import connectDB from "../../db";
import User, { UserDocument } from "@/models/User";

import bcrypt from "bcryptjs";
import dotenv from 'dotenv'
dotenv.config();

interface TokenWithRole extends Record<string, any> {
  role: string;
}

export const authOptions: any = {
  providers: [
    CredentialProvider({
      id: "credentials",
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' }
        },
            //@ts-ignore
        async authorize(credentials: any) {
          await connectDB();
          try {            //@ts-ignore
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                            //@ts-ignore
                credentials.password,
                user.password
              );
              if (isPasswordCorrect){
                if(!user.role) {
                  user.role = 'user';
                  await user.save();
                }
                return user;
              }
            }
            return null;
          } catch (err: any) {
            throw new Error(err);
          }
        },
      }),
    // ...add more providers here
  ],
  callbacks: {

    async signIn({ user, account }: { user: AuthUser; account: Account }){
      if (account?.provider == "credentials") {
        return true
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

 const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
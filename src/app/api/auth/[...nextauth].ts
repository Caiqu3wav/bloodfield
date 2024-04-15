import NextAuth, { Session } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import connectDB from "../db";
import User, { UserDocument } from "@/models/User";
import bcrypt from "bcryptjs";

interface TokenWithRole extends Record<string, any> {
  role: string;
}

export const authOptions: any = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
        id: "credentials",
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials: Record<"email" | "password", string>) {
          await connectDB();
          try {
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
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
    jwt: async ({ token, user }: { token: TokenWithRole; user: AuthUser }) => {
      const customUser = user as unknown as any

      if (user) {
        return {
          ...token,
          role: customUser.role
        }
      }

      return token
    },

    async signIn({ user, account }: { user: AuthUser; account: Account }){
      if (account?.provider == "credentials") {
        return true
      }
    },

    session: async ({ session, token } : {session: Session; token: TokenWithRole}) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role
        }
      }
    }
  },
  pages: {
    signIn: '/signin',
  },
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
        name: '',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials) {
          const user = {
            id: '1',
            email: 'asapcaique7@gmail.com',
            password: 'pass',
            name: 'Caique',
            role: 'admin'
          }

          const isValidEmail = user.email === credentials?.email;
          const isValidPassword = user.password === credentials?.password;

          if (!isValidEmail || !isValidPassword){
              return null;
             }
             
             return user;
        }
      }),
    // ...add more providers here
  ],
  callbacks: {

  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
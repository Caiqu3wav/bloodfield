//@ts-nocheck
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../db";
import util from 'util'
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'
dotenv.config();

const query = util.promisify(db.query).bind(db);

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                let user = await query(`SELECT * FROM users WHERE email = '${credentials.email}'`);
                user = user[0];

                if (!user) {
                    return null;
                }

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                if (isPasswordCorrect) {
                    return user
                } else {
                  return null
                }
            }
        })
    ],
  secret: process.env.NEXTAUTH_SECRET,
}

 const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
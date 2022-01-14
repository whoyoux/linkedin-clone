import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';

import clientPromise from '../../../lib/mongodb';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: 'jwt'
    },
    debug: true
});

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { PiStrategy } from "react-icons/pi";
import { getMaxAge } from "next/dist/server/image-optimizer";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("ideaVault");

export const auth = betterAuth({

    baseURL: process.env.BETTER_AUTH_URL,

    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        },
    },

    plugins: [
        jwt()
    ]


});
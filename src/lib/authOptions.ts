import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials"
export const authOptions: NextAuthOptions ={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) { // fix the credential type
              // Custom logic to authenticate user with your database via API
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
              });
      
              const user = await res.json();
      
              if (res.ok && user) {
                // If the user is authenticated successfully, return the user object
                return user;
              } else {
                // If authentication failed, return null
                return null;
              }
            }
          })
        ],
        pages: {
          signIn: '/auth/sign-in',  // Custom sign-in page route
        },
        callbacks: {
          async session({ session, token }) {
            // ... existing code ...
            session.user = session.user ?? {};
            if (session.user && token.sub) {
              (session.user as any).id = token.sub;
            }
            return session;
          },
          async jwt({ token, user }) {
            if (user) {
              token.sub = user.id;  // Persist user id in the token
            }
            return token;
          }
        },
        secret: process.env.NEXTAUTH_SECRET,
    }
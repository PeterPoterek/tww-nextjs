import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { verifyPassword } from "@/lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {
        if (!credentials) {
          console.log("No credentials provided.");
          return null;
        }

        const username = credentials.username as string;
        const password = credentials.password as string;

        try {
          const user = await prisma.user.findUnique({
            where: { uid: username },
          });

          if (user && (await verifyPassword(password, user.password))) {
            console.log("User authenticated successfully:", username);
            return { id: user.id, name: user.uid };
          } else {
            console.log("Invalid username or password.");
            return null;
          }
        } catch (err) {
          console.error("Error during authentication:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      console.log("Sign-in attempt:", user ? "Success" : "Failed");
      return !!user;
    },
  },
});

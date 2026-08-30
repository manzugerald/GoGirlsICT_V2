import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';

/**
 * NextAuth config, split out from app/api/auth/[...nextauth]/route.ts —
 * Next.js 15's route-handler type checking only allows HTTP method exports
 * (GET/POST/etc, plus a small fixed set of config exports) from a route.ts
 * file, so `authOptions` can no longer live there alongside the handler.
 *
 * Credentials provider now ONLY verifies credentials and returns the user
 * object to NextAuth. Session / server-side session tracking (Session model)
 * has been moved out to dedicated endpoints at:
 *   POST /api/auth/login
 *   POST /api/auth/logout
 *
 * Keep the JWT session strategy so NextAuth client features continue to work
 * when you still use next-auth signIn on the client. Note however that the
 * separate /api/auth/login endpoint sets its own server-session cookie (app_session)
 * used for session tracking; choose which mechanism your client uses for auth.
 */

// Extend the session/jwt types to include our user fields
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
      image?: string;
      role: string;
    };
  }

  interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    image?: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    image?: string;
    role: string;
  }
}

type UserPayload = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  image?: string;
  role: string;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username or email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<UserPayload | null> {
        if (!credentials?.username || !credentials?.password) return null;

        // lookup by username or email
        const user = await prisma.user.findFirst({
          where: {
            OR: [{ username: credentials.username }, { email: credentials.username }],
          },
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            image: true,
            password: true,
            role: true,
            // do not perform session creation or side-effects here
            failedLoginCount: true,
            lockedUntil: true,
          },
        });

        if (!user || !user.password) return null;

        // respect lockout: if locked, deny authorization (client will show message)
        const now = new Date();
        if (user.lockedUntil && user.lockedUntil > now) {
          return null;
        }

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) {
          // We intentionally do NOT mutate lock counters here to keep NextAuth authorize
          // side-effect free. Use /api/auth/login to perform login attempts tracking.
          return null;
        }

        // Return minimal user payload for NextAuth JWT/session creation
        return {
          id: user.id,
          username: user.username,
          firstName: user.firstName ?? '',
          lastName: user.lastName ?? '',
          image: user.image ?? undefined,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.image = user.image;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.image = token.image as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

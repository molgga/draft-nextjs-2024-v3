import NextAuth from 'next-auth';
import { createNextAuthOptions } from '@web/features/auth/server';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- next-auth 타입 문제
const handler = NextAuth(createNextAuthOptions());
export { handler as GET, handler as POST };

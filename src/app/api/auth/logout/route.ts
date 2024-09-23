import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  // Remove the token cookie
  cookies().delete('userToken');

  return NextResponse.json({ message: 'Logged out successfully' });
}
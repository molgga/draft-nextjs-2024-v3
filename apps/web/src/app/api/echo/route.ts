import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    echo: 'hello',
    now: Date.now(),
  });
}

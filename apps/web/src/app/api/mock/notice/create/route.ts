import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { delay } from '@web/shared/util/functional';

export async function POST(request: NextRequest) {
  console.log('!!!!!!!!!!!!! API:', request.url);

  const { content } = (await request.json()) as { content?: string };

  await delay(100 + Math.random() * 1111);

  if (content === 'err') {
    const err = { status: 400, statusText: 'test error' };
    return NextResponse.json({ error: err }, err);
  }

  return NextResponse.json({
    success: true,
  });
}

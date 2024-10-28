import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  getRandomDateYMD,
  getRandomText,
  getRandomWord,
} from '@web/shared/util/randomize';

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('!!!!!!!!!!!!! API:', request.url);

  const id = Number(params?.id);
  if (!id) {
    const err = { status: 404, statusText: 'Not found error' };
    return NextResponse.json({ error: err }, err);
  }
  return NextResponse.json({
    id: Number(params?.id) || null,
    title: getRandomText(3, 10),
    content: getRandomText(3, 20),
    author: getRandomText(1, 2),
    date: getRandomDateYMD(),
    category: getRandomWord(),
    now: new Date().toLocaleString(),
  });
}

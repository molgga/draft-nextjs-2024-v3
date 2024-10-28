import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  getRandomDateYMD,
  getRandomInt,
  getRandomText,
  getRandomWord,
} from '@web/shared/util/randomize';

export function GET(request: NextRequest) {
  console.log('!!!!!!!!!!!!! API:', request.url);

  return NextResponse.json({
    total: new Date().toLocaleString(),
    list: Array.from(Array(10)).map(() => {
      return {
        id: getRandomInt(1, 99999),
        title: getRandomText(3, 10),
        content: getRandomText(3, 20),
        author: getRandomText(1, 2),
        date: getRandomDateYMD(),
        category: getRandomWord(),
      };
    }),
  });
}

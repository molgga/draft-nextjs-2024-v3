import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  getRandomDateYMD,
  getRandomInt,
  getRandomText,
  getRandomWord,
} from '@web/shared/util/randomize';
import { toQuerySearchParams } from '@web/shared/util/search/to-query-search-params';

export function GET(request: NextRequest) {
  console.log('!!!!!!!!!!!!! API:', request.url);
  const query = toQuerySearchParams(request.nextUrl.searchParams);
  return NextResponse.json({
    meta: { ...query },
    total: 125,
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

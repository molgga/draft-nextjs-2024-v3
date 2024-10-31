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
  let total = 0;
  let list: unknown[] = [];
  if (query?.searchText === 'empty') {
    list = [];
  } else if (query?.searchText === 'error') {
    throw new Error('error!');
  } else {
    total = 123;
    list = Array.from(Array(10)).map(() => {
      return {
        id: getRandomInt(1, 99999),
        title: `랜덤 ${getRandomText(3, 10)}`,
        content: getRandomText(3, 20),
        author: getRandomText(1, 2),
        date: getRandomDateYMD(),
        category: getRandomWord(),
      };
    });
  }

  return NextResponse.json({
    meta: { ...query },
    total,
    list,
  });
}

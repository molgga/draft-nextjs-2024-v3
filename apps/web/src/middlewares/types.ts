import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export const ResponseHeaderAuthTokenKey = 'X-Test-Token';

export type MiddlewareFn = (params: {
  request: NextRequest;
  response: NextResponse;
  fetchEvent: NextFetchEvent;
}) => Promise<void> | void;

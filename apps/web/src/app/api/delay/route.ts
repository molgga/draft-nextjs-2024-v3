import { NextResponse } from "next/server";

export const revalidate = 3;

export async function GET() {
  const delay = Math.random() * 3000 + 200;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("########################## 22", Date.now());
      resolve({
        helloffff: "foo",
        delay,
        d1: new Date().toLocaleString(),
      });
    }, delay);
  });
  return NextResponse.json(data);

  // const data = {
  //   helloffff: 'foo',
  //   d1: new Date().toLocaleString(),
  //   d2: Date.now(),
  // };

  // return NextResponse.json(data, {
  //   headers: {
  //     'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
  //   },
  // });

  // const data = {
  //   helloffff: 'foo',
  //   d1: new Date().toLocaleString(),
  //   d2: Date.now(),
  // };

  // return NextResponse.json(data);
}

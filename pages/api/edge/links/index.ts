import type { NextRequest } from "next/server";
import { redis, setRandomKey } from "@/lib/upstash";

export const config = {
  runtime: "experimental-edge",
};

const LINK_DOMAIN='go.ginetta.net'
export default async function handler(req: NextRequest) {
  return new Response(`Unauthorized`, { status: 401 });

  // if (req.method === "POST") {
  //   const url = req.nextUrl.searchParams.get("url");
  //   if (!url) {
  //     return new Response(`Missing url or hostname`, { status: 400 });
  //   }
  //   const { response, key } = await setRandomKey("dub.sh", url);
  //   if (response === 1) {
  //     // if key was successfully added
  //     await redis.zadd(`go.ginetta.net:links:timestamps:generic`, {
  //       score: Date.now(),
  //       member: key,
  //     });
  //     return new Response(
  //       JSON.stringify({
  //         key,
  //         url,
  //       }),
  //       { status: 200 }
  //     );
  //   } else {
  //     return new Response(
  //       JSON.stringify({
  //         error: "failed to save link",
  //       }),
  //       { status: 500 }
  //     );
  //   }
  // } else {
  //   return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  // }
}

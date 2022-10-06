import type { NextRequest } from "next/server";
import { getRandomKey } from "@/lib/upstash";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  if (req.method === "GET") {
    const key = await getRandomKey("go.ginetta.net");
    return new Response(JSON.stringify(key), { status: 200 });
  } else {
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}

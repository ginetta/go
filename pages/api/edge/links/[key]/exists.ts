import type { NextRequest } from "next/server";
import { checkIfKeyExists } from "@/lib/upstash";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  if (req.method === "GET") {
    const url = req.nextUrl.pathname;
    const key = url.split("/")[4];
    const response = await checkIfKeyExists("go.ginetta.net", key);
    return new Response(JSON.stringify(response), { status: 200 });
  } else {
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}

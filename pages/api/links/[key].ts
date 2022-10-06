import { NextApiRequest, NextApiResponse } from "next";
import { redis, editLink, deleteLink } from "@/lib/upstash";
import { getSession } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  const { key: oldKey } = req.query as { key: string };


  if (req.method === "PUT") {
    let { key, url, title, timestamp } = req.body;
    if (!key || !url || !title || !timestamp) {
      return res
        .status(400)
        .json({ error: "Missing key or url or title or timestamp" });
    }
    const response = await editLink(
      "go.ginetta.net",
      oldKey,
      {
        key,
        url,
        title,
        timestamp,
      }
    );
    if (response === null) {
      return res.status(400).json({ error: "Key already exists" });
    }
    return res.status(200).json(response);
  } else if (req.method === "DELETE") {
    const response = await deleteLink("go.ginetta.net", oldKey);
    return res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

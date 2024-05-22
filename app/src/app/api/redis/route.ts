import { createClient } from "redis";
import { NextResponse } from "next/server";

const client = createClient({
  url: "redis://default:SocialNetworkpass@localhost:6379",
});

client.connect().then(() => {
  console.log("connected to redis");
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") ?? "";

  return NextResponse.json({ key: await client.get(key) });
}

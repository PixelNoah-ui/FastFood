import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth(); // ✅ SAFE here (server-side)

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // Send this to your backend API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/address/${session.user.id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to save address" },
      { status: 500 },
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}

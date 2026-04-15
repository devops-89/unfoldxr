// /app/api/verify-recaptcha/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.RECAPTHA_SECRET_KEY}&response=${token}`,
  });

  const data = await res.json();

  return NextResponse.json(data);
}

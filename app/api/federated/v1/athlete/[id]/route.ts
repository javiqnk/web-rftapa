import { NextResponse } from "next/server";
import { athlete } from "@/app/api/data/federated/athlete";

// To handle a GET request to /api
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const getData = await athlete(params['id']);
  return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const getData = await athlete(params['id']);
  return NextResponse.json(getData, { status: 200 });
}
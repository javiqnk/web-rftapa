import { NextResponse } from "next/server";
import { club } from "@/app/api/data/federated/club";

// To handle a GET request to /api
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const getData = await club(params['id']);
  return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const getData = await club(params['id']);
  return NextResponse.json(getData, { status: 200 });
}
"use server";

import { NextResponse } from "next/server";
import { tournament } from "@/app/api/data/results/tournament";

// To handle a GET request to /api
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Do whatever you want
    const getData = await tournament(params['id']);
    return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Do whatever you want
    const getData = await tournament(params['id']);
    return NextResponse.json(getData, { status: 200 });
}
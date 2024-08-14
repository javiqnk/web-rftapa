"use server";

import { NextResponse } from "next/server";
import { athletes } from "@/app/api/data/federated/athletes";

// To handle a GET request to /api
export async function GET(request: any) {
    // Do whatever you want
    const getData = await athletes();
    return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: any) {
    // Do whatever you want
    const getData = await athletes();
    return NextResponse.json(getData, { status: 200 });
}
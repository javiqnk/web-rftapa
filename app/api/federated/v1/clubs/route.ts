"use server";

import { NextResponse } from "next/server";
import { clubs } from "../../../data/federated/clubs";

// To handle a GET request to /api
export async function GET(request: any) {
    // Do whatever you want
    const getData = await clubs();
    return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: any) {
    // Do whatever you want
    const getData = await clubs();
    return NextResponse.json(getData, { status: 200 });
}
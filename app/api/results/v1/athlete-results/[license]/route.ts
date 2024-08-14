"use server";

import { NextResponse } from "next/server";
import { atheleteResults } from "@/app/api/data/results/atheleteResults";

// To handle a GET request to /api
export async function GET(
    request: Request,
    { params }: { params: { license: string } }
) {
    // Do whatever you want
    const getData = await atheleteResults(params['license']);
    return NextResponse.json(getData, { status: 200 });
}

// To handle a POST request to /api
export async function POST(
    request: Request,
    { params }: { params: { license: string } }
) {
    // Do whatever you want
    const getData = await atheleteResults(params['license']);
    return NextResponse.json(getData, { status: 200 });
}
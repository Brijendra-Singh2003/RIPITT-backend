import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return new NextResponse(JSON.stringify({ success: true, data: "Hello world" }));
}

export async function POST(req: NextRequest) {
    return new NextResponse(JSON.stringify({ success: true, data: "Hello world" }));
}

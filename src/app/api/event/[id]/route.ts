import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, querry: any) {
    const params = await querry.params;

    console.log(querry, req.nextUrl.searchParams.get('id'));
    return new NextResponse(JSON.stringify({ success: true, data: params.id }));
}

export async function POST(req: NextRequest, querry: any) {
    const body = await req.json();
    console.log(req.body);

    return new NextResponse(JSON.stringify({ success: true, data: body }));
}

import connectDb from "@/configuration/db";
import { NextRequest, NextResponse } from "next/server";

export const tryCatch = (callback: (req: NextRequest, querry: any) => Promise<NextResponse>) => async function (req: NextRequest, querry: any) {
    try {
        await connectDb();
        return await callback(req, querry);
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}

import connectDb from "@/configuration/db";
import { NextRequest, NextResponse } from "next/server";

export const tryCatch = (callback: (req: NextRequest, querry: any) => Promise<{ success: boolean; data?: any }>) => async function (req: NextRequest, querry: any) {
    try {
        await connectDb();
        return new NextResponse(JSON.stringify(await callback(req, querry)));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}

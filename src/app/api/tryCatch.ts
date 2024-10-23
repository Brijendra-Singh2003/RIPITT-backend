import connectDb from "@/configuration/db";
import { NextRequest, NextResponse } from "next/server";

export const tryCatch = (callback: (req: NextRequest, querry: any) => Promise<{ success: boolean; data?: any }>) => async function (req: NextRequest, querry: any) {
    try {
        await connectDb();
        return new NextResponse(JSON.stringify(await callback(req, querry)),{headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',  // Allow all origins or restrict to specific ones
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },});
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500,headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  // Allow all origins or restrict to specific ones
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }, },);
    }
}

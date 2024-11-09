import { ConnectDB } from "@/lib/config/db";

const { NextResponse } = require("next/server");


const LoadDB = async () => {
    await ConnectDB;
}

LoadDB()

export async function GET(request) {
    console.log("BLOG GET HIT");
    return NextResponse.json({msg:"API WORKING "})
    
}

export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now()
}
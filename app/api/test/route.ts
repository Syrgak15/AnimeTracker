import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "Nothing";
    return NextResponse.json({name})
}

export async function POST(request: Request) {
    try{
        const body = await request.json();

        return NextResponse.json({
            message: "Here's the data you sent in the POST request:",
            sent: body,
        });

    } catch(e: any) {
        console.log(e.message);
        return NextResponse.json({
            error: "Invalid JSON data in request body",
            },
            {status: 500}
        )
    }
}

export async function DELETE(request: Request) {
    return NextResponse.json({ message: "Hello from DELETE!"});
}


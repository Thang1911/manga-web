import { NextResponse } from "next/server";
import { Comics } from "comics-api";

async function getData(name: string, id: number) {
    const response = await Comics.getChapter(name, id);
    const data = await response;
    return data;
}

export async function GET(request: any) {
    const currentUrl = new URL(request.url);
    const namePath = currentUrl.toString().split('/');
    const name = namePath[namePath.length - 2];
    if(name) {
        const chapter = parseInt(currentUrl.searchParams.get("chapterId") || "1", 10);
        const response = await getData(name, chapter)
        return NextResponse.json(response)
    }
}
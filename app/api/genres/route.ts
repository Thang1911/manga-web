import { Comics } from "comics-api";
import { NextResponse } from "next/server";

async function getData(id: string, page:number) {
    const response = await Comics.getComicsByGenre(id, page);
    const data = await response.comics;
    return data;
}

export async function GET(request: any) {
    const currentUrl = new URL(request.url);
    const genresId = currentUrl.searchParams.get('genresId')?.toString();
    if (genresId) {
      const page = parseInt(currentUrl.searchParams.get("page") || "1", 10);
      const response = await getData(genresId, page);
      return NextResponse.json(response);
    } else {
      return NextResponse.json({ error: "Invalid genresId" }, { status: 400 });
    }
}
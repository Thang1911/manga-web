import { NextResponse } from "next/server";

async function getData(id: string, page:number) {
    const response = await fetch(`https://comics-api.vercel.app/genres/${id}?page=${page}`);
    const data = await response.json();
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
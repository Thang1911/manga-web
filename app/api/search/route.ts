import { NextResponse } from "next/server";

async function fetchManga (query: any) {
    const response = await fetch(
      ` https://comics-api.vercel.app/search?q=${query}`
    );
    const data = await response.json();
    return data;
}

export async function GET(request: any) {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query');
    const response = await fetchManga(query);
    return NextResponse.json(response);
}
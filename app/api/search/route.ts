import { NextResponse } from "next/server";
import { Comics } from "comics-api";

async function fetchManga (query: any) {
    const response = await Comics.searchComics(query)
    const data = await response.comics;
    return data;
}

export async function GET(request: any) {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query');
    const response = await fetchManga(query);
    return NextResponse.json(response);
}
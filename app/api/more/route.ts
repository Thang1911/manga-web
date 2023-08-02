import { NextResponse } from "next/server";
import { Comics } from "comics-api";

async function fetchNewManga(page: number) {
  const response = await Comics.getRecentUpdateComics(page);
  const data = await response.comics;
  return data;
}

async function fetchBoyManga(page: number) {
  const response = await Comics.getBoyComics(page);
  const data = await response.comics;
  return data;
}

async function fetchGirlManga(page: number) {
  const response = await Comics.getGirlComics(page);
  const data = await response.comics;
  return data;
}

export async function GET(request: any) {
  const currentUrl = new URL(request.url);
  const title = currentUrl.searchParams.get("title");
  const page = parseInt(currentUrl.searchParams.get("page") || "1", 10);

  let response;

  if (title === "new-manga") {
    response = await fetchNewManga(page);
  } else if (title === "boy-manga") {
    response = await fetchBoyManga(page);
  } else if (title === "girl-manga") {
    if (page === 1 || page === 2) {
      response = await fetchGirlManga(page);
    } else {
      return NextResponse.json(
        { error: "Invalid page for girl-manga" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ error: "Invalid title" }, { status: 400 });
  }

  return NextResponse.json(response);
}

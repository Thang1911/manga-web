import { NextResponse } from "next/server";

async function fetchNewManga(page: number) {
  const response = await fetch(
    `https://comics-api.vercel.app/new-comics?page=${page}`
  );
  const data = await response.json();
  return data;
}

async function fetchBoyManga(page: number) {
  const response = await fetch(
    `https://comics-api.vercel.app/boy-comics?page=${page}`
  );
  const data = await response.json();
  return data;
}

async function fetchGirlManga(page: number) {
  const response = await fetch(
    `https://comics-api.vercel.app/girl-comics?page=${page}`
  );
  const data = await response.json();
  return data;
}

async function fetchTopManga(page: number) {
  const response = await fetch(
    `https://comics-api.vercel.app/top?page=${page}`
  );
  const data = await response.json();
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
    response = await fetchGirlManga(page);
  } else if (title === "top") {
    response = await fetchTopManga(page);
  } else {
    return NextResponse.json({ error: "Invalid title" }, { status: 400 });
  }

  return NextResponse.json(response);
}

export async function getMangaDetail(query: string) {
  const response = await fetch(`https://comics-api.vercel.app/comics/${query}`);
  return response.json();
}

export async function getGenres() {
  const response = await fetch(`https://comics-api.vercel.app/genres`);
  return response.json();
}

export async function getNewUpload() {
  const response = await fetch(`https://comics-api.vercel.app/new-comics`);
  return response.json();
}

export async function getBoyManga() {
  const response = await fetch(`https://comics-api.vercel.app/boy-comics`);
  return response.json();
}

export async function getGirlManga() {
  const response = await fetch(`https://comics-api.vercel.app/girl-comics`);
  return response.json();
}

export async function getTopManga() {
  const response = await fetch(`https://comics-api.vercel.app/top`);
  return response.json();
}

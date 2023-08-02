import { Comics } from "comics-api";

export async function getTopManga()  {
    const response = await Comics.getTopAllComics();
    return response.comics;
}

export async function searchManga(query: string) {
    const response = await Comics.searchComics(query);
    return response.comics;
}

export async function getChapters(query: string) {
    const response = await Comics.getChapters(query);
    return response;
}

export async function searchSuggestion(query: string) {
    const response = await Comics.getSearchSuggest(query);
    return response.comics;
}

export async function getMangaDetail(query: string) {
    const response = await Comics.getComicDetail(query);
    return response;
}

export async function getChapter(query: string, id: number) {
    const response = await Comics.getChapter(query, id);
    return response;
}

export async function getGenres() {
    const response = await Comics.getGenres();
    return response;
}

export async function getTrending() {
    const response = await Comics.getTrendingComics();
    return response.comics;
}

export async function getRecommendManga() {
    const response = await Comics.getRecommendComics();
    return response.comics;
}

export async function getNewUpload() {
    const response = await Comics.getRecentUpdateComics();
    return response.comics;
}

export async function getCompletedManga() {
    const response = await Comics.getCompletedComics();
    return response.comics;
}

export async function getBoyManga() {
    const response = await Comics.getBoyComics();
    return response.comics;
}

export async function getGirlManga() {
    const response = await Comics.getGirlComics();
    return response.comics;
}

export async function getMangaByGenres(genresId: string) {
    const response = await Comics.getComicsByGenre(genresId);
    return response.comics;
}

export async function getMangaByAuthor(authorId: string) {
    const response = await Comics.getComicsByAuthor(authorId);
    return response.comics;
}
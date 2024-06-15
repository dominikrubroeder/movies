"use server";

import { IMovie } from "@/components/atoms/Movie/types";
import { MovieList } from "@/lib/TMDb/types";

const apiKey = process.env.TMDB_API_KEY;
const baseUrl = process.env.TMDB_BASE_URL;

export async function fetchMovies({
  type,
}: {
  type: MovieList;
}): Promise<IMovie[] | undefined> {
  const url = `${baseUrl}/movie/${type}?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
}

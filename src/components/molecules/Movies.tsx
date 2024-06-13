import { fetchMovies } from "@/lib/TMDb";
import Movie from "@/components/atoms/Movie/Movie";

export default async function Movies({
  layout = "grid",
}: {
  layout?: "row" | "grid";
}) {
  const movies = await fetchMovies({ type: "popular" });

  if (movies === undefined) return null;

  return (
    <div>
      <ul
        className={`grid ${layout === "grid" && "sm:grid-cols-[repeat(auto-fit,_minmax(min(320px,100%),_1fr))]"}`}
      >
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

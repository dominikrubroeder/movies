import { fetchMovies } from "@/lib/TMDb";
import Movie from "@/components/atoms/Movie/Movie";
import { MovieList } from "@/lib/TMDb/types";
import {
  FilmIcon,
  FunnelIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default async function Movies({
  type,
  title,
  layout = "grid",
}: {
  type: MovieList;
  title: string;
  layout?: "row" | "grid";
}) {
  const movies = await fetchMovies({ type: type });

  if (movies === undefined) return null;

  return (
    <section className="relative">
      <div className="group sticky top-0 z-50 grid grid-cols-[auto_1fr] gap-4 bg-gradient-to-b from-black to-transparent pb-5 pr-8">
        <div className="z-10 block h-full w-4 flex-auto shrink-0 bg-red-600 transition-all hover:w-10" />
        <div>
          <div className="flex items-center gap-4">
            <h3>{title}</h3>
            <div className="invisible inline-flex translate-y-2 items-center gap-2 py-2 opacity-0 transition delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="invisible inline-flex translate-y-2 opacity-0 delay-200 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  className="flex size-11 items-center justify-center gap-2 rounded-2xl bg-black/25 text-white/70 transition-all hover:bg-black/40 hover:text-white"
                  aria-label="Search movies"
                >
                  <FunnelIcon className="size-5" />
                </button>
              </div>

              <div className="invisible inline-flex translate-y-2 opacity-0 delay-200 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  className="flex size-11 items-center justify-center gap-2 rounded-2xl bg-black/25 text-white/70 transition-all hover:bg-black/40 hover:text-white"
                  aria-label="Search movies"
                >
                  <FilmIcon className="size-5" />
                </button>
              </div>

              <div className="invisible inline-flex translate-y-2 opacity-0 delay-300 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  className="flex size-11 items-center justify-center gap-2 rounded-2xl bg-black/25 text-white/70 transition-all hover:bg-black/40 hover:text-white"
                  aria-label="Search movies"
                >
                  <InformationCircleIcon className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul
        className={`grid ${layout === "grid" && "sm:grid-cols-[repeat(auto-fit,_minmax(min(320px,100%),_1fr))]"}`}
      >
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

import { Suspense } from "react";
import Movies from "@/components/molecules/Movies";

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">
        Movies app by Dominik Rubröder. Doing stuff for fun, testing and
        expertise.
      </h1>
      <Suspense>
        <Movies title="Popular movies" type="popular" />
      </Suspense>

      <Suspense>
        <Movies title="Top rated movies" type="top_rated" />
      </Suspense>
    </div>
  );
}

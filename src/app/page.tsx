import { Suspense } from "react";
import Movies from "@/components/molecules/Movies";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Movies app by Dominik Rubröder. Doing stuff for fun, testing and
        expertise.
      </h1>
      <Suspense>
        <Movies />
      </Suspense>
    </main>
  );
}

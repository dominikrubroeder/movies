import { IMovie } from "@/components/atoms/Movie/types";
import Image from "next/image";

export default function Movie({ movie }: { movie: IMovie }) {
  const { title, poster_path } = movie;

  return (
    <div>
      <Image
        src={`${process.env.TMDB_BASE_IMAGE_URL}${poster_path}`}
        alt={title}
        sizes="100vw, (min-width: 640px) 50vw, (min-width: 1024px) 33vw"
        className="w-full object-contain"
        width={400}
        height={600}
      />
    </div>
  );
}

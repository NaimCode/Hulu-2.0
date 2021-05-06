import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import FlipMove from "react-flip-move";
import { forwardRef } from "react";
const Results = ({ requests }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
  "
    >
      {requests.map((movie) => (
        <Thumbnail key={movie.id} result={movie} />
      ))}
    </FlipMove>
  );
};

export default Results;
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group cursor-pointer  p-2 transition duration-200 transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        height={1000}
        width={1920}
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`}{" "}
          {result.release_date || result.first_air_data}
          {" - "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
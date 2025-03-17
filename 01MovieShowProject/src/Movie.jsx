import React, { useState } from "react";
import { movies } from "./Data";

export default function Movie() {
  const [data, setData] = useState(movies);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const showMovies = (value) => {
    setSelectedCategory(value); // Update active category
    if (value === "All") {
      setData(movies); // Reset to all movies
    } else {
      let updatedMovieList = movies.filter((e) => e.category === value);
      setData(updatedMovieList);
    }
  };

  return (
    <div className="w-full h-full m-auto mt-2">
      <div className="flex gap-2 flex-wrap justify-center">
        {[
          "All",
          "Action",
          "Thriller",
          "Animation",
          "Horror",
          "Drama",
          "Sci-Fi",
        ].map((category) => (
          <button
            key={category}
            className={`border w-[90px] text-center p-2 cursor-pointer rounded transition-all duration-300 ease-in-out
              ${
                selectedCategory === category
                  ? "bg-gray-600 text-white"  
                  : "hover:bg-gray-400 hover:text-white"
              }`}
            onClick={(e) => showMovies(e.target.value)}
            value={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {data.map((e) => (
          <div key={e.id} className="border p-2 rounded-lg w-full">
            <img
              src={e.poster_path}
              alt={e.title}
              className="w-full h-auto object-cover transition-all duration-300 ease-in-out hover:w-[98%] m-auto cursor-pointer"
            />
            <div className="mt-2 font-bold text-center">{e.title}</div>
            <div className="text-gray-600 text-center">{e.release_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { React, useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import MovieCard from "./MovieCard";
import "./movieCard.css";
import MyCarousel from "./Carousel";

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function ContentCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
    });
  }, []);
  const allImageURLs = movies.map(
    (movie) => `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );
  const carouselImages = shuffleArray(allImageURLs).slice(0, 4);

  return (
    <>
      <MyCarousel images={carouselImages}></MyCarousel>
      <ul className="container">
        {movies.map((movie) => {
          console.log(movie);
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </>
  );
}

export default ContentCard;

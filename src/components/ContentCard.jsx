import { React, useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import MovieCard from "./MovieCard";
import "./movieCard.css";
import MyCarousel from "./Carousel";
import { ShuffleArray } from '../utils/ShuffleArray'


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
  const carouselImages = ShuffleArray(allImageURLs).slice(0, 4);

  return (
    <>
      <MyCarousel images={carouselImages}></MyCarousel>
      <ul className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </>
  );
}

export default ContentCard;

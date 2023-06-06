import React, { useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import MainCard from "./MainCard";
function MainContent() {
  const [movieImg, setMovieImg] = useState([]);
  const [bookImg, setBookImg] = useState([]);
  const [tvImg, setTvImg] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      const movieResults = data.results;

      setMovieImg(
        movieResults
          .map((movie) => `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
          .slice(0, 3)
      );

      
    });
    get("/tv/popular").then((data) => {
      const tvResults = data.results;

      setTvImg(
        tvResults.map(
          (tv) => `https://image.tmdb.org/t/p/w300${tv.poster_path}`
        ).slice(0, 3)
      );

      
    });

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20"
        );
        const data = await response.json();
        const bookResults = data.items;

        setBookImg(
          bookResults
            .map((book) => book.volumeInfo.imageLinks?.thumbnail)
            .filter((url) => url !== null)
            .slice(0, 3)
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-10 mt-3 text-center">
          Enchantainment: Where Stories Come Alive!
        </h1>
        <h2 className="col-10 mt-1 text-center">
          Discover the Best of Movies, Shows, and Literature
        </h2>
        <p>
          Here you will find everything you need to immerse yourself in the
          exciting world of entertainment. Explore a wide selection of movies,
          series, and books from various genres and discover new stories that
          will captivate you.
        </p>
        <div className="row col-md-9 offset-md-1">
          <div className="col-md-3 offset-md-1 mb-4">
            <MainCard images={movieImg} name='movie' />
          </div>
          <div className="col-md-3 offset-md-1 mb-4">
            <MainCard images={tvImg} name='tv' />
          </div>
          <div className="col-md-3 offset-md-1 mb-4">
            <MainCard images={bookImg} name='book' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

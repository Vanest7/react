import { React, useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import SerieCard from "./SerieCard";
import "./movieCard.css";
import MyCarousel from "./Carousel";
import { ShuffleArray } from '../utils/ShuffleArray'


function ContentTv() {
  const [series, SetSeries] = useState([]);
  useEffect(() => {
    get("/tv/popular").then((data) => {
      SetSeries(data.results);
    });
  }, []);
  const allImageURLs = series.map(
    (serie) => `https://image.tmdb.org/t/p/w300${serie.poster_path}`
  );
  const carouselImages = ShuffleArray(allImageURLs).slice(0, 4);

  return (
    <>
      <MyCarousel images={carouselImages}></MyCarousel>
      <ul className="container">
        {series.map((serie) => {
          return <SerieCard key={serie.id} serie={serie} />;
        })}
      </ul>
    </>
  );
}

export default ContentTv;

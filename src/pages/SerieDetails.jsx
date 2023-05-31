import React, { useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import { useParams } from "react-router-dom";
import GetImg from "../utils/GetImg";
import "../pages/movieDetails.css";
import NavBar from "../utils/NavBar";
function SerieDetails() {
  const { serieId } = useParams();
  const [show, setShow] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    get("/tv/" + serieId).then((data) => {
      setShow(data);
      setGenre(data.genres[0]);
    });
  }, [serieId]);
  const imageURL = GetImg(show.poster_path, 400);
  return (
    <>
    <NavBar/>
      <div className="details">
        <img className="imageDetails" src={imageURL} alt={show.title} />
        <div className="movieDetails">
          {show && show.title?(
          <p className="title">
            <strong>Title: </strong>
            {show.title}
          </p>
          ):null}
          
          <p className="genre">
            <strong>Genre: </strong>
            {genre.name}
          </p>
          {show && show.overview?(
          <p className="overview">
            <strong>Description: </strong>
            {show.overview}
          </p>
          ):null}
          
        </div>
      </div>
    </>
  );
}

export default SerieDetails;

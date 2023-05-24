import React, { useState, useEffect } from "react";
import { get } from "../data/HttpClient";
import { useParams } from "react-router-dom";
import GetImg from "../utils/GetImg";
import "../pages/movieDetails.css"
function MovieDetails() {
   const {movieId} = useParams() 
   const [movie, setMovie] = useState([])
   const [genre, setGenre] = useState([])
   useEffect(()=>{
    get("/movie/"+movieId).then((data) =>{
        setMovie(data)
        setGenre(data.genres[0])
        console.log("datos"+data)
    })
   }, [movieId])
   const imageURL = GetImg(movie.poster_path, 400)
    return(
        <div className="details">
            <img className="imageDetails" src={imageURL}
            alt={movie.title}/>
            <div className="movieDetails">
                <p className="title">
                    <strong>Title: </strong>
                    {movie.title}
                </p>
                <p className="genre">
                    <strong>Genre: </strong>
                    {genre.name}
                </p>
                <p className="overview">
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
        
    )
}

export default MovieDetails;
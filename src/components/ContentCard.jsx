import { React, useState, useEffect } from 'react';
import {get} from "../data/HttpClient";
import MovieCard from "./MovieCard";
import './movieCard.css';
function ContentCard() {
    const [movies, SetMovies] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data) =>{
            SetMovies(data.results);
        })
    }, [])
    console.log(movies)
    return (
        <ul className='container'>
            {movies.map((movie)=>{
                console.log(movie)
                return <MovieCard key={movie.id} movie={movie}/>
            })}
        </ul>
    )
}

export default ContentCard
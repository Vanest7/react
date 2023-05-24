import React from "react";
import PropTypes from 'prop-types';
import './movieCard.css';
import { Link } from "react-router-dom";
function MovieCard({movie}){
    const imageURL =`https://image.tmdb.org/t/p/w300${movie.poster_path}` ;
    console.log("holaa"+imageURL)
    return (
    <div className="movies">
        <li className="movieCard">
                
                <Link to={"/movie/"+movie.id}>
                    <img className="imageMovie" width={230}
                    height={345}
                    src={imageURL}
                    alt={movie.title}/>
                    
                </Link>
                <div className="title"><p>{movie.title}</p></div>
        </li>
        
    </div>
            
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    
  };

export default MovieCard;
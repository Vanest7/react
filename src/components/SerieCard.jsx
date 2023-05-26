import React from "react";
import PropTypes from 'prop-types';
import './movieCard.css';
import { Link } from "react-router-dom";

function SerieCard({serie}){
    const imageURL =`https://image.tmdb.org/t/p/w300${serie.poster_path}` ;
    
    return (
    <div className="movies">
        <li className="movieCard">
                
                <Link to={"/serie/"+serie.id}>
                    <img className="imageMovie" width={230}
                    height={345}
                    src={imageURL}
                    alt={serie.title}/>
                    
                </Link>
                <div className="title"><p>{serie.title}</p></div>
        </li>
        
    </div>
            
    )
}

SerieCard.propTypes = {
    serie: PropTypes.object.isRequired,
    
  };

export default SerieCard;
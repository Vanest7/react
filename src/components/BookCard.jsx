import React from "react";
import PropTypes from 'prop-types';
import './movieCard.css';
import { Link } from "react-router-dom";
function BookCard({book}){
    const imageURL = book.volumeInfo.imageLinks?.thumbnail;
    
    return (
    <div className="movies">
        <li className="movieCard">
                
                <Link to={"/book/"+book.id}>
                    <img className="imageMovie" width={230}
                    height={345}
                    src={imageURL}
                    alt={book.volumeInfo.title}/>
                    
                </Link>
                <div className="title"><p>{book.volumeInfo.title}</p></div>
        </li>
        
    </div>
            
    )
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    
  };

export default BookCard;
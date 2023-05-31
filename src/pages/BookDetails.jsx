import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/movieDetails.css";
import NavBar from "../utils/NavBar";
function BookDetails() {
  const { bookId } = useParams();
  const [book, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${bookId}`
          );
          const data = await response.json();
          setBooks(data);
          console.log(data)
        } catch (error) {
          console.log(error);
        }
      };
      fetchBooks()
  }, [bookId]);
  
  const imageURL =  book.volumeInfo?.imageLinks?.thumbnail;
  return (
    <>
    <NavBar/>
      <div className="details">
        <img className="imageDetails" width="400" src={imageURL} alt={book.volumeInfo?.title} />
        <div className="movieDetails">
          <p className="title">
            <strong>Title: </strong>
            {book.volumeInfo?.title}
          </p>
          
            {book && book.volumeInfo?.subtitle?(
            <p className="genre">
              <strong>Subtitle: </strong>
              {book.volumeInfo?.subtitle}
            </p>
            ):null}
            
          
          <p className="overview">
            <strong>Author: </strong>
            {book.volumeInfo?.authors[0]}
          </p>
        </div>
      </div>
    </>
  );
}

export default BookDetails;

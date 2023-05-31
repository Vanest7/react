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
        <img className="imageDetails" src={imageURL} alt={book.volumeInfo?.title} />
        <div className="movieDetails">
          <p className="title">
            <strong>Title: </strong>
            {book.volumeInfo?.title}
          </p>
          <p className="genre">
            <strong>Subtitle: </strong>
            {book.volumeInfo?.subtitle}
          </p>
          <p className="overview">
            <strong>Description: </strong>
            {book.volumeInfo?.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default BookDetails;

import React, { useState, useEffect } from "react";
import "./movieCard.css";
import MyCarousel from "./Carousel";
import BookCard from "./BookCard";
import { ShuffleArray } from '../utils/ShuffleArray'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20"
      );
      const data = await response.json();
      setBooks(data.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const allImageURLs = books
  .map((book) => book.volumeInfo.imageLinks?.thumbnail)
  .filter((url) => url !== null);
  
  const carouselImages = ShuffleArray(allImageURLs).slice(0, 4);
  return (
    <div>
        <MyCarousel images={carouselImages}></MyCarousel>
        <ul className="container">
        {books.map((book) => {
         const imageURL = book.volumeInfo?.imageLinks?.thumbnail;
         if(!imageURL) return null
          return <BookCard key={book.id} book={book} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;

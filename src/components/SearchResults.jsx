import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../data/HttpClient";
import NavBar from '../utils/NavBar';
import './movieCard.css';
import { Link } from "react-router-dom";
import GetImg from "../utils/GetImg";


function SearchResults() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('term');
  const [googleBooksResults, setGoogleBooksResults] = useState([]);
  const [tmdbResults, setTmdbResults] = useState([]);
  const [showResults, setShowResults] = useState([]);
  useEffect(() => {
    const fetchGoogleBooksResults = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}`
        );
        const data = await response.json();
        setGoogleBooksResults(data.items || []);
        
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTmdbResults = async () => {
      try {
        const response = await get(`/search/movie?api_key=7007080e44315a18449abf4d28fbb935&query=${encodeURIComponent(
            searchQuery
          )}`
        
        );
        
        
        setTmdbResults(response.results || []);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchShowResults = async () => {
        try {
          const response = await get(`/search/tv?api_key=7007080e44315a18449abf4d28fbb935&query=${encodeURIComponent(
              searchQuery
            )}`
          
          );
          
          
          setShowResults(response.results || []);
        } catch (error) {
          console.log(error);
        }
      };
    fetchGoogleBooksResults();
    fetchTmdbResults();
    fetchShowResults();
  }, [searchQuery]);
  const imageURL = (posterPath) => GetImg(posterPath, 400);
  console.log(tmdbResults)
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
         {tmdbResults.map((result) => (
            
            <div key={result.id}>
              <div key={result.id}>
                 <Link to={"/movie/"+result.id}>
                 <img className="imageMovie" width={230}
                    height={345}
                    src={imageURL(result.poster_path)}
                    alt={result.title}/>
                    </Link>
              <p>Title: {result.title}</p>
             </div>
            </div>
          ))}
          {showResults.map((result) => (
            
            <div key={result.id}>
              <div key={result.id}>
            <Link to={"/tv/"+result.id}>
                 <img className="imageMovie" width={230}
                    height={345}
                    src={imageURL(result.poster_path)}
                    alt={result.title}/>
                    </Link>
              <p>Title: {result.title}</p>
             </div>
            </div>
          ))}
          {googleBooksResults.map((result) => (
              <div key={result.id} className="movies">
                 <Link to={"/book/"+result.id}>
                    <img className="imageMovie" width={230}
                        height={345}
                        src={result.volumeInfo.imageLinks?.thumbnail}
                        alt={result.volumeInfo.title}/>
                </Link>
                    <p>Title: {result.volumeInfo.title}</p>
                  
              </div>
          ))}
       
         
    </div>

    </>
  );
}

export default SearchResults;

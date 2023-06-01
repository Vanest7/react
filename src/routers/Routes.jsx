import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import React from 'react';
import MovieDetails from "../pages/MovieDetails";
import SerieDetails from "../pages/SerieDetails";
import BookDetails from "../pages/BookDetails";
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';
import BooksPage from '../pages/BooksPage';
import SearchResults from '../components/SearchResults'

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/movie/:movieId" element={<MovieDetails/>}/>
                <Route exact path="/serie/:serieId" element={<SerieDetails/>}/>
                <Route exact path="/book/:bookId" element={<BookDetails/>}/>
                <Route exact path="/movies" element={<MoviesPage/>}/>
                <Route exact path="/tv" element={<SeriesPage/>}/>
                <Route exact path="/books" element={<BooksPage/>}/>
                <Route exact path="/search" element={<SearchResults/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;
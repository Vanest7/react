import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import React from 'react';
import MovieDetails from "../pages/MovieDetails";
import SerieDetails from "../pages/SerieDetails";
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage'

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/movie/:movieId" element={<MovieDetails/>}/>
                <Route exact path="/serie/:serieId" element={<SerieDetails/>}/>
                <Route exact path="/movies" element={<MoviesPage/>}/>
                <Route exact path="/tv" element={<SeriesPage/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;
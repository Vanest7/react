import React from "react";
import PropTypes from "prop-types";
import MyCarousel from "./Carousel";
import { Link } from "react-router-dom";

function MainCard({images, name}) {
    return(
        <>
        <div className="card text-bg-dark" style={{ width: "18rem" }}>
            <MyCarousel className="card-img-top" images={images}></MyCarousel>
            <div className="card-body">
                <h5 className="card-title offset-4">Just out</h5>
                {name === 'movie' &&(
                <Link to="/movies" className="btn btn-success">View more...</Link>) 
                }{name === 'tv' &&(
                <Link to="/tv" className="btn btn-success">View more...</Link>
                )}
                {name === 'book' &&(
                <Link to="/books" className="btn btn-success">View more...</Link>
                )}
                
                
            </div>
        </div>
        </>
    )
    
}
    MainCard.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    };
export default MainCard;
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import "./carousel.css";
const MyCarousel = ({ images }) => {
  return (
    <Carousel interval={3000} className="my-carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          {image && (
            <img className="d-block w-100" src={image} alt={image.title} />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
MyCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyCarousel;

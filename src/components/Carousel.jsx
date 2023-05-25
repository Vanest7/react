import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = ({images}) =>{
    return(
        <Carousel>
            {images.map((image)=>{
                <Carousel>
                    <img className='d-block w-100' src={image.poster_path} alt={image.title}/>
                </Carousel>
            })}
        </Carousel>
    )
}
   
    
   
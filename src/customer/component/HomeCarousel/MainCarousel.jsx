import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MainCarouseData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {

    const items = MainCarouseData.map((item)=> <img className='cursor-pointer -z-10'
    role='presentation' src= {item.image} alt=""/>)
    return(
        <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
    />
    )
};

export default MainCarousel;
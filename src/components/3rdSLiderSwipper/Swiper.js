import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import './Swipper.scss';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import {SwipperCustNav} from './SwipperCustNav';
import "swiper/css/navigation";
export class Swipper extends React.Component{
    render(){
        return(
            <div className = "Main-div1">
          
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../../images/Flight1-img-webp.jpg')} className = "SwipImg"/></SwiperSlide>
        <SwiperSlide><img src={require('../../images/Flight-images-webp.jpg')} className = "SwipImg"/></SwiperSlide>
        <SwiperSlide><img src={require('../../images/Cat-last.jpg')} className = "SwipImg"/></SwiperSlide>
      </Swiper>
      </div>
        )
    }
}
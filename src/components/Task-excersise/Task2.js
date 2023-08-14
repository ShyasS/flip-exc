import React, { useEffect } from 'react';
import {useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import "./style.css";
import axios from 'axios';
export function Task2(){
    const[swip,setSwipe] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
         setSwipe(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[])
    return(
        <div>
               <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >++++++++++++++++++
{swip.map((data)=>
         <SwiperSlide>
            {data.id}
            {data.title}
            {data.price}
            {data.description}
            {data.category}
           <img src={data.image}/>
            {data.rating.rate} 
            {data.rating.count}  
         </SwiperSlide>
         )}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    )
}
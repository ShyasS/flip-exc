import React, { useRef, useState } from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import './FourthSlide.scss';
 function FourthSlider() {
  const products = useSelector((state)=>state.allProducts.products);
  const fetchDetails = products.map((product)=>{
    const {id,image,title,description,category,price} = product;
return (
    <div className = "Maindiv"> 
    <div class="card">
    <Link to = {`/products/${id}`} style = {{textDecoration:'none', color:'black'}}> 
  <img src={image} class="card-img-top"/>
  <div class="card-body">
    <p className = "p1" title={title}>{title}</p>
    <p className = "p2">${price}</p>
    <p class="card-text" title={description}>{description}</p>
    <p className = "p3" >{category}</p>
  </div>
  </Link>
  </div>
      
      
      </div>
    );
  })

return(
  <>
   <Swiper
        slidesPerView={10}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> {fetchDetails}</SwiperSlide>
        </Swiper>
 
  </>
)


  }
  export default FourthSlider;


import React from 'react';
import {useSwiper} from 'swiper/react';
export function SwipperCustNav(){
    const swiper = useSwiper();
    return(
        <div className = "SwiperNavButn">
        <button class="btn btn-primary" onClick={()=>swiper.slidePrev()}>Prev</button>{" "}
        <button class="btn btn-primary"onClick={()=>swiper.slideNext()}>Next</button>
        </div>
    )
}
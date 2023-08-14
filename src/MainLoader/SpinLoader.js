import React,{useState,useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import {Catagory} from './components/CatagoryComponent/CatagoryComponent';
import {Swipper} from './components/3rdSLiderSwipper/Swiper';
import {FourthSlider} from './components/4thSlider/FourthSlide';
export function SpinLoader(){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };


    const [loader,setLoader] = useState(false);
useEffect(()=>{
  setTimeout(()=>{
      setLoader(true)
  },4000)
},[])
    return(
        <>
        {loader?<div>
          <HeaderComponent/>
       <Catagory/>
       <Swipper/>
       <FourthSlider/>
        </div>  : <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
}
        </>
    )
}
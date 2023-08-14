import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FourthSlider from '../4thSlider/FourthSlide';
import { fetchProducts } from '../Redux/Actions/ProductActions';
import './Main4thSlider.scss';
export function MainfourthSlider(){
    const products = useSelector((state) =>state)
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchProducts());
    },[])
    return(
        <div className='Maindiv'>
        <FourthSlider/>
        </div>
    )
}
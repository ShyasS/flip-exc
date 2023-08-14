import React, { Fragment, useRef } from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';
export function Task(){
    const [user,setUser] = useState([]);
 

    useEffect(()=>{  
        axios.get('https://fakestoreapi.com/products/categories').then(function (response) {
        setUser(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[])
    
        return(

            <div>
             {user.map((data)=>
                <Fragment><img className ="w-25 h-25" src={require('../../images/4-1.png')}/><p>{data}</p></Fragment>
                )}  
                </div>
        )
    }

import React from 'react';
import axios from 'axios';
import {FourthSlider} from '../../components/4thSlider/FourthSlide'
export class FifthSlide extends React.Component{
    constructor(){
        super()
        this.state = {
            id : "",
            title : "",
            price : "",
            description : "",
            category : "",
            image : "",
            rating :  ""
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products').then((response)=> {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
      }

    render(){
        return(
            <div>
                <FourthSlider/>
            </div>
        )
    }
}
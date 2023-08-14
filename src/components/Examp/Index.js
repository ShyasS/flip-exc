import React,{useState} from 'react';
import { Router,Route,useNavigate } from 'react-router-dom';
import {SignUp} from '../../components/Examp/SignUp';

export function Index(){
    const [Input,setInput] = useState(null);



    const HandleClick = () =>{
      

    }
    return(
//         <BrowserRouter>
//         <p>LoginPage</p>
//         <Link to="/SignUp"></>
// <Routes>
//      <Route path = "/Index" element = {<Index/>}/>  
//         </Routes>
//         </BrowserRouter>


<>
<h1>LoginPage</h1>
<button onClick = {HandleClick}>Want to SignIn</button>






</>
    )
}
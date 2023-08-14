import React from 'react';
import './Index.scss';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export function Index(){
    return(
        <div className = "Maindiv">
         <Box
      sx={{
        marginTop:'-85px',
        marginLeft:'850px',
        width: 230,
        height: 90,
        backgroundColor:'white'
      }}
    />
    <div className = "box"> </div>
        <Button variant="contained" sx = {{
                marginTop:'0px',
                marginLeft:'9px',
                width:200,
                backgroundColor:'#fc7703',
                '&:hover' :{
                    backgroundColor:'#fc7703'
                }
        }}>Login</Button>
        <p style = {{
            marginTop:'-50px',
            marginLeft:'850px',
            cursor:'pointer'
        }}>New Customer?</p>
         <Button sx = {{
            textTransform:"capitalize",
            marginTop:'-74px',
            marginLeft:'200px',
            fontWeight:'560',


         }}>Sign Up</Button>

        </div>
    )
}
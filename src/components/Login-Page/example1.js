import { Avatar, Grid,Paper, Tooltip,Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {useNavigate} from "react-router-dom";
export function Example(){
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const PaperStyle = {padding:20,height:'60vh', width:360, margin:'100px auto'}

    const [input,setInput] = useState({
       name : "",
       password : ""
    })



    const HandleInput = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
       
        setInput({
            ...input,
            [name] : value,
        })
    };

    const HandleSubmit = () => {
        if(input.name === "Shyas@gmail.com" && input.password === "Shyas@123"){
            navigate("/HeaderComponent");
        }
        else{
            alert("Enter Valid name & Password")
        }
       
        }
        
    
    return(
       
        <div>
            <Grid>
                <Paper elevation = {10} style = {PaperStyle}>
                    <Grid align='center'>
                    <Avatar></Avatar>
                    <h2>Login-Page</h2>
                    </Grid>
                    <TextField id="outlined-basic" value = {input.name} onChange = {HandleInput} name = "name"label="Name" variant="standard" placeholder = "Enter your name" fullWidth/>
                    <TextField id="outlined-basic" value = {input.password} onChange = {HandleInput} name = "password" type ="password" label="Password" variant="standard" placeholder = "Enter your password"  fullWidth/>
            
                    <FormControlLabel sx = {{marginTop:"10px"}} control={<Checkbox defaultChecked />} label="Remember me"  />
                    <Button variant="contained" onClick = {HandleSubmit}sx = {{textTransform:"capitalize", marginTop:"10px"}}fullWidth >Login</Button>
                    <Typography><Link href="#" style = {{marginTop:"10px"}} underline="hover">
        {'Forget password?'}
      </Link>
      </Typography>
      <Typography>Do you have an account? <Link href = "#">Sign-Up</Link></Typography>
                    </Paper>
            </Grid>
        </div>
    )
} 

import React,{useState,useEffect}from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Skeleton.scss';
import {Card1} from '../../components/SkeletonLoader/Card';
import { Placeholder } from '../../components/SkeletonLoader/Placeholder';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Skeleton = () =>{
const [loader,setLoader] = useState([])


 useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(response=>{
  setLoader(response)

})

 },[])

 return(
  <div>


<Box sx={{ width: '100%' }}>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{loader.map((data)=>
  <Grid item xs={2}>
     <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
    
        />
        <img src = {data.image}style= {{height:"300px", width:"350px"}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" class = "Para-text" title={data.title}>
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" class = "card-text" title={data.description} >
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)}
</Grid>
</Box>

</div>
     )
}
export default Skeleton;
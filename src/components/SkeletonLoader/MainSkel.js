import React,{useState,useEffect} from 'react';
import Skeleton from '../../components/SkeletonLoader/SkeletonPage';
import { Placeholder } from '../../components/SkeletonLoader/Placeholder';
const MainSkel = () =>{
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(true)
      },4000)
    },[])
return(
    <>
{isLoading?<Skeleton/>:<Placeholder/>}
    </>
)
}
export default MainSkel;
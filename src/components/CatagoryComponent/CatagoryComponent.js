import React from 'react';
import './Catagory.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
export function Catagory(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    
    
        return(
        <div className = "main-div">
            <img id="img1" src={require('../../images/Groceries-images.jpg')}/><p>Grocery</p>
            <img id="img1" src={require('../../images/Mobile-images.jpg')}/><p>Mobiles</p>
            <div className = "Fashion"><img id="img1" src={require('../../images/fashion-images.jpg')}/>
            <div className = "List">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
        sx={{marginTop:'-10px',marginLeft:'30px', fontSize:'14px', color:'black', fontFamily:'sans-serif',textTransform:"capitalize"}}
      >
       Dashboard<FontAwesomeIcon className = "Icon41" icon={faAngleDown}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      
      >
        
        <MenuItem className = "MainmenuItem" sx = {{m:1}}onClick={handleClose}>Men's TopWear<FontAwesomeIcon icon={faAngleRight}/></MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Men's BottomWear</MenuItem>
        <MenuItem sx = {{m:1}}onClick={handleClose}>Women Ethnic</MenuItem>
        <MenuItem sx = {{m:1}}onClick={handleClose}>Women Western</MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Men FootWear</MenuItem>
        <MenuItem  sx = {{m:1}}onClick={handleClose}>Women FootWear</MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Watches and Accessories</MenuItem>
        <MenuItem  sx = {{m:1}}onClick={handleClose}>Bags,Suitcases & Luggage</MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Kids</MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Essentials</MenuItem>
        <MenuItem sx = {{m:1}} onClick={handleClose}>Winter</MenuItem>
  
      </Menu>
    </div>
     </div>
            <div className = "MainELec"><img id="img1" src={require('../../images/Electronics-images.jpg')}/>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
        className = "ElecPara"
        sx={{marginTop:'-10px',marginLeft:'30px', fontSize:'14px', color:'black', fontFamily:'sans-serif',textTransform:"capitalize"}}
      >
       Electronics<FontAwesomeIcon className = "Icon41" icon={faAngleDown}/>
      </Button>
              
              </div>
            <div className = "MainHome"><img id="img1" src={require('../../images/Home-images.png')}/>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
        className = "HomePara"
        sx={{marginTop:'-10px',marginLeft:'30px', fontSize:'14px', color:'black', fontFamily:'sans-serif',textTransform:"capitalize"}}
      >
       Home<FontAwesomeIcon className = "Icon41" icon={faAngleDown}/>
      </Button>
            
      </div>
            <img id="img1" src={require('../../images/4-7.jpg')}/><p>Appliances</p>
            <img id="img1" src={require('../../images/Travel-images.jpg')}/><p>Travel</p>
            <img id="img1" src={require('../../images/Offer-images.png')}/><p>TopOffers</p>
            <div className = "MainBeauty"><img id="img1" src={require('../../images/Toys-images.jpg')}/>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
        className = "HomePara"
        sx={{marginTop:'-10px',marginLeft:'30px', fontSize:'14px', color:'black', fontFamily:'sans-serif',textTransform:"capitalize"}}
      >
       Beauty,Toys & More<FontAwesomeIcon className = "Icon41" icon={faAngleDown}/>
      </Button>
            
            
            
          </div>
            <div className = "MainTwowhe"><img id="img1" src={require('../../images/Two-wheeler images.jpg')}/>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
        className = "HomePara"
        sx={{marginTop:'-10px',marginLeft:'30px', fontSize:'14px', color:'black', fontFamily:'sans-serif',textTransform:"capitalize"}}
      >
       Two Wheelers<FontAwesomeIcon className = "Icon41" icon={faAngleDown}/>
      </Button>
            
            
            
            
            </div>
    
            </div>
        )
    }

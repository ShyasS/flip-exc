import React, { useState,useEffect} from "react";
import "./HeaderComponent.scss";
import {Index} from '../../components/LoginAPIcall/Index';
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import MovingIcon from "@mui/icons-material/Moving";
import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
const Textfield = { width: "300px", marginTop: "-30px", marginLeft: "10px" };
export function HeaderComponent(args) {
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const toggle = () => setModal(!modal);

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  
  return (
    <div className="Main-div">
      <h1>
        <i>FlipKart</i>
      </h1>
      <p>
        <i>
          Explore{" "}
          <span className="span1">
            Plus
            <img src={require("../../images/1.png")} />
          </span>
        </i>
      </p>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        placeholder="Search for products,brands and more"
        aria-describedby="emailHelp"
      />
      <FontAwesomeIcon className="Icon1" icon={faMagnifyingGlass} />
      <div>
        {/* <button>Login</button> */}
        <div>
          <Button color="primary" onClick={toggle}>
            Login
          </Button>
      
          <div>
            <Modal
              isOpen={modal}
              toggle={toggle}
              {...args}
              size="lg"
              style={{
                maxWidth: "700px",
                width: "100%",
                maxHeight: "70%",
                heigth: "100%",
              }}
            >
              <div
                style={{
                  width: "40%",
                  backgroundColor: "#4260f5",
                  color: "white",
                }}
              >
                <h1
                  style={{
                    fontSize: "27px",
                    marginTop: "30px",
                    marginLeft: "20px",
                  }}
                >
                  Login
                </h1>
                <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                  Get access to your <br></br> Orders, Wishlist and <br></br>{" "}
                  Recommendations
                </p>
                <img
                  style={{
                    marginTop: "250px",
                  }}
                  src={
                    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  }
                />
              </div>
              <div
                style={{
                  width: "",
                  marginTop: "-100px",
                  marginLeft: "300px",
                }}
              >
                <div
                  style={{
                    marginTop: "-370px",
                  }}
                >
                  <TextField
                    style={Textfield}
                    id="standard-basic"
                    label="Enter Email/Mobile Number"
                    variant="standard"
                  />
                  <p
                    style={{
                      fontSize: "13px",
                      marginLeft: "10px",
                      marginTop: "30px",
                      opacity: "0.7",
                    }}
                  >
                    By continuing, you agree to Flipkart's{" "}
                    <a href="#">Terms of Use</a> and
                    <a href="#"> Privacy Policy.</a>
                  </p>
                </div>
              </div>
              <ModalBody></ModalBody>

              <Button
                color="primary"
                onClick={toggle}
                style={{
                  width: "50%",
                  backgroundColor: "orange",
                  border: "none",
                  height: "50px",
                  marginTop: "-290px",
                  marginLeft: "300px",
                  borderRadius: "0px",
                }}
              >
                Request OTP
              </Button>
              <p
                style={{
                  marginTop: "270px",
                  marginLeft: "360px",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  New to Flipkart? Create an account
                </a>
              </p>
            </Modal>
          </div>
        </div>
      </div>
      <p className="p1" >Become a seller</p>
      <div className="Mainp2">
        <p className="p2" >
          More
          <FontAwesomeIcon className="Icon21" icon={faAngleDown} />
          <List
          className = "List"
            sx={{
              marginLeft: "-90px",
              width: "280px",
              backgroundColor: "white",
              color: "black",
              zIndex:99
            }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button divider>
              <NotificationsActiveIcon color="primary" />
              <ListItemText sx = {{marginLeft:'10px',}}primary="Notification Preference" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <HelpCenterIcon color="primary" />
              <ListItemText sx = {{marginLeft:'10px'}} primary="24X7 Customer Care" />
            </ListItem>
            <ListItem button divider>
              <MovingIcon color="primary" />
              <ListItemText sx = {{marginLeft:'10px'}} primary="Advertise" />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <DownloadIcon color="primary" />
              <ListItemText sx = {{marginLeft:'10px'}} primary="Download App" />
            </ListItem>
          </List>
        </p>
      </div>
      <p className="p3">
        <FontAwesomeIcon className="Icon3" icon={faCartShopping} /> Cart
      </p>
    </div>
  );

}

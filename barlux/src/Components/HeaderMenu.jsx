import React, { useEffect, useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../Styles/HeaderStyle";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
const HeaderMenu = ({valuee}) => {
  const [value, setValue] = React.useState("recents");
  useEffect(() => {
    setValue(valuee)
  },[valuee])
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
    toggleDrawer()
  };
  const drawerContents = (
    <Box sx={{ width: "100vw" }}>
      <Box display="flex" justifyContent="flex-start" p={1}>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Navbar  showLabels onChange={handleChange} value={value} sx={{width:'100%'}}>
        <BottomNavigationAction
          label="محصولات"
          value="products"
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          label="ثبت نام"
          value="signup"
          icon={<ExitToAppIcon />}
        />
        <BottomNavigationAction
          label="ارتباط با ما"
          value="contactus"
          icon={<ContactMailOutlinedIcon />}
        />
        <BottomNavigationAction
          label="درباره ما"
          value="aboutus"
          icon={<GroupsOutlinedIcon />}
        />
      </Navbar>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ color: "#4dc488" }}
        onClick={toggleDrawer}
      >
        <MenuIcon sx={{ fontSize: "36px" }} />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContents}
      </Drawer>
    </div>
  );
};

export default HeaderMenu;

import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const HeaderMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContents = (
    <Box sx={{ width: "100vw" }}>
      <Box display="flex" justifyContent="flex-start" p={1}>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button>
          <ListItemText primary="محصولات" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="درباره ما" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="تماس با ما" />
        </ListItem>
      </List>
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
        <MenuIcon sx={{ fontSize: "36px", }} />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContents}
      </Drawer>
    </div>
  );
};

export default HeaderMenu;

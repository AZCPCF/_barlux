import React from "react";
import Header from "./Components/Header";
import Theme from "./Styles/Theme";
import "./App.css";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={Theme}>
        <div dir="rtl" style={{ fontFamily: "IranSans" }}>
          <Header />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

// import React, { useState } from "react";
// import {
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const HeaderMenu = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const drawerContents = (
//     <Box sx={{ width: "100vw", color: "#4dc488" }}>
//       <Box display="flex" justifyContent="flex-end" p={1}>
//         <IconButton onClick={toggleDrawer}>
//           <CloseIcon color="#4dc488" />
//         </IconButton>
//       </Box>

//       <List>
//         <ListItem button>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="About" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Services" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Contact" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <IconButton
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         onClick={toggleDrawer}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//         {drawerContents}
//       </Drawer>
//     </div>
//   );
// };

// export default HeaderMenu;

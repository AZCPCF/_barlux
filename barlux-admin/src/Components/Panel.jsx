import React, { Fragment, useContext } from "react";
import { Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import { TokenContext } from "../Hooks/ToastContext";
import GroupIcon from '@mui/icons-material/Group';
import DiscountIcon from '@mui/icons-material/Discount';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ChecklistSharpIcon from '@mui/icons-material/ChecklistSharp';
let drawerWidth = 240;
const lists = [
  { title: "کاربران", icon: <GroupIcon />, navigate: "/users" },
  { title: "دسته بندی ها", icon: <CategoryIcon />, navigate: "/categories" },
  { title: "کد تخفیف", icon: <DiscountIcon />, navigate: "/discounts" },
  { title: "محصولات", icon: <ProductionQuantityLimitsIcon />, navigate: "/products" },
  { title: "سفارشات", icon: <ChecklistSharpIcon />, navigate: "/orders" },
  { title: "خروج", icon: <LogoutIcon />, navigate: "/" },
];
export default function Panel({ children,title }) {
  const navigate = useNavigate();
  const {logout} = useContext(TokenContext)
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "white" }}
            >
              پنل ادمین / {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {lists.map((list, index) => (
              <Fragment key={index}>
                {index === lists.length - 1 ? (
                  <ListItem
                    disablePadding
                    onClick={() => {
                      navigate(list.navigate);
                      logout()
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>{list.icon}</ListItemIcon>
                      <ListItemText primary={list.title} />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <ListItem
                    disablePadding
                    onClick={() => {
                      navigate(list.navigate);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>{list.icon}</ListItemIcon>
                      <ListItemText primary={list.title} />
                    </ListItemButton>
                  </ListItem>
                )}
              </Fragment>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}

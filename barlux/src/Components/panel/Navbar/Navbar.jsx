import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import variables from "../../../JSON/variables.json";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Grid } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { ResponsiveContext } from "../../../Store/ResponsiveContext";

export default function PersistentDrawerLeft({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const {md} = React.useContext(ResponsiveContext)
  
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: md?'100%':0,
      }),
    })
  );
  
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const drawerWidth = 300;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: md?'100%':drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography position={"absolute"} left={"20px"}>
            نام کاربری
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Grid container justifyContent={"center"}>
            {[
              { text: "سایت اصلی", icon: <HomeIcon />, navigate: "/" },
              {
                text: "اطلاعات کاربری",
                icon: <AssignmentIndIcon />,
                navigate: "/panel/userinfo",
              },
              {
                text: "کیف پول",
                icon: <AccountBalanceWalletIcon />,
                navigate: "/panel/wallet",
              },
              {
                text: "سبد خرید",
                icon: <ShoppingBagIcon />,
                navigate: "/panel/cart",
              },
              {
                text: "آدرس ها",
                icon: <LocationOnIcon />,
                navigate: "/panel/addresses",
              },
            ].map((item) => (
              <Grid xs={11} key={item.text}>
                <ListItem>
                  <ListItemButton
                    sx={{
                      borderRadius: "12px",
                      background: variables.color["1300"],
                    }}
                    onClick={() => {
                      navigate(item.navigate);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </Drawer>
      <Main open={open}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid xl={0.5} sm={1}>
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon fontSize="large" color="primary" />
            </IconButton>
          </Grid>
          <Grid xl={open ? 12 : 11.5} xs={10}>
            <Box
              sx={{
                background: variables.color["700"],
                height: "75px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              color={"#fff"}
            >
              <Typography variant="h5">پنل کاربر</Typography>
              {children}
            </Box>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

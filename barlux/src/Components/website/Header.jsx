import { Grid, InputAdornment, BottomNavigationAction } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import json from "../../JSON/variables.json";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useState } from "react";
import {
  CartButtonHeader,
  HeaderButtons,
  Logo,
  Navbar,
  ResponsiveMenu,
  SearchInput,
  SignUpButtonHeader,
  StyledHeader,
} from "../../Styles/HeaderStyle";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [value, setValue] = useState("recents");
  const navigate = useNavigate();
  const handleChange = (x,newValue) => {
    setValue(newValue);
    console.log(newValue);
    navigate(`/${newValue}`);
  };
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xl={12} md={12} sm={12}>
          <StyledHeader>
            <Grid xl={2} md={2}>
              <Logo
                src={json.logo}
                value={"/"}
                onClick={() => {
                  navigate("/");
                  setValue(null);
                }}
              />
            </Grid>
            <Grid item xl={3}>
              <Navbar onChange={handleChange} value={value}>
                <BottomNavigationAction
                  label="محصولات"
                  value="products"
                  icon={<ShoppingCartOutlinedIcon />}
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
            </Grid>
            <Grid xl={4} item md={4}>
              <SearchInput
                variant="outlined"
                placeholder="جستجو کنید..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xl={3} md={4} item>
              <HeaderButtons>
                <CartButtonHeader variant="contained">
                  <ShoppingBasketIcon sx={{ color: "#fff" }} />
                </CartButtonHeader>
                <SignUpButtonHeader variant="outlined">
                  <PersonIcon />
                  <span>ثبت نام</span>
                </SignUpButtonHeader>
              </HeaderButtons>
            </Grid>
            <Grid
              display={"none"}
              id="responsiveMenu"
              container
              item
              xs={12}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'space-around'}
            >
              <ResponsiveMenu
                id="responsiveMenu"
                xs={12}
                sx={{ marginTop: "200px" ,marginBottom:"20px"}}
                container
                flexDirection={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <HeaderMenu valuee={value} />
                <Logo
                  src={json.logo}
                  onClick={() => {
                    navigate("/");
                    setValue(null);
                  }}
                  style={{ width: "20%", margin: "0", height: "100%" }}
                />
                <CartButtonHeader
                  variant="contained"
                  sx={{ width: "50px", height: "50px" }}
                >
                  <ShoppingBasketIcon sx={{ color: "#fff" }} />
                </CartButtonHeader>
              </ResponsiveMenu>
              <Grid xs={10} item sx={{marginBottom:'100px'}}>
                <SearchInput
                  variant="outlined"
                  placeholder="جستجو کنید..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </StyledHeader>
        </Grid>
      </Grid>
    </div>
  );
}

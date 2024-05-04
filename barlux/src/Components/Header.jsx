import { Grid, InputAdornment, MenuItem } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import json from "../links.json";
import React, { useState } from "react";
import {
  CartButtonHeader,
  HeaderButtons,
  Logo,
  MenuHeader,
  Navbar,
  ResponsiveMenu,
  SearchInput,
  SignUpButtonHeader,
  StyledHeader,
} from "../Styles/HeaderStyle";
import HeaderMenu from "./HeaderMenu";
import Banner from "./Banner";
// location.href = '?page=$id'
export default function Header() {
  // const [value, setValue] = useState("");
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <StyledHeader>
            <Grid xs={2}>
              <Logo src={json.logo} />
            </Grid>
            <Grid xs={4}>
              <Navbar>
                <MenuItem>محصولات</MenuItem>
                <MenuItem>درباره ما</MenuItem>
                <MenuItem>تماس با ما</MenuItem>
              </Navbar>
            </Grid>
            <Grid xs={4}>
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
            <Grid xs={3}>
              <HeaderButtons>
                <CartButtonHeader>
                  <ShoppingBasketIcon />
                </CartButtonHeader>
                <SignUpButtonHeader>
                  <PersonIcon />
                  ثبت نام
                </SignUpButtonHeader>

                {/* <Button sx={{width:'20px',height:'50px',bgcolor:'#4DC488',color:'white'}}>s</Button> */}
              </HeaderButtons>
            </Grid>
            <ResponsiveMenu id="responsiveMenu">
              <HeaderMenu />
              <Logo src={json.logo} style={{ width: "30%",height:'100%' }} />
              <CartButtonHeader style={{ width: "10%" }}>
                <ShoppingBasketIcon />
              </CartButtonHeader>
            </ResponsiveMenu>
          </StyledHeader>
        </Grid>
      </Grid>
      <Banner/>
    </div>

  );
}
// import React from 'react'

// export default function Header() {
//   return (
//     <div>

//     </div>
//   )
// }

import { Typography } from "@mui/material";
import React from "react";
import {
  ContactFooter,
  ContactFooterP,
  FooterMenuItem,
  FooterMenuTitle,
  LinksDiv,
  LogoFooter,
} from "../Styles/FooterStyle";
import MenuList from "@mui/material/MenuList";
import { Logo } from "../Styles/HeaderStyle";
import json from "../links.json";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xl: -2, lg: 0, xs: -1 }}
        sx={{ borderTop: "2px solid #EAEAEA" }}
      >
        <Grid
          xl={4}
          lg={3}
          xs={12}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LogoFooter src={json.logo} />
          <Typography variant="body2" sx={{ width: "200px" }} align="center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </Typography>
          <LinksDiv>
            <InstagramIcon />
            <XIcon />
            <TelegramIcon />
          </LinksDiv>
        </Grid>
        <Grid
          xl={2}
          lg={2}
          xs={6}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={json.color}>
            <FooterMenuTitle>میانبر</FooterMenuTitle>
          </Typography>
          <MenuList>
            <FooterMenuItem>صفحه اصلی</FooterMenuItem>
            <FooterMenuItem>درباره ما</FooterMenuItem>
            <FooterMenuItem>تماس با ما</FooterMenuItem>
            <FooterMenuItem>تماس با ما</FooterMenuItem>
            <FooterMenuItem>قوانین و مقررات</FooterMenuItem>
          </MenuList>
        </Grid>
        <Grid
          xl={2}
          lg={2}
          xs={6}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={json.color}>
            <FooterMenuTitle>میانبر</FooterMenuTitle>
          </Typography>
          <MenuList sx={{marginLeft:'35px'}}>
            <FooterMenuItem>صفحه اصلی</FooterMenuItem>
            <FooterMenuItem>درباره ما</FooterMenuItem>
            <FooterMenuItem>تماس با ما</FooterMenuItem>
            <FooterMenuItem>تماس با ما</FooterMenuItem>
            <FooterMenuItem>قوانین و مقررات</FooterMenuItem>
          </MenuList>
        </Grid>
        <Grid
          xl={4}
          lg={4}
          xs={12}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GoogleMap />
        </Grid>
      </Grid>
    </Box>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={0}>
    //     <StyledFooter>
    //           <ContactFooter>
    //             <LogoFooter src={json.logo} />
    //             <Typography variant="body2" sx={{ width: "200px" }}>
    //               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    //               استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید
    //               سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    //             </Typography>
    //             <LinksDiv>
    //               <InstagramIcon />
    //               <XIcon />
    //               <TelegramIcon />
    //             </LinksDiv>
    //           </ContactFooter>
    //         </Grid>
    //         <Grid xl={2} lg={6}>
    //           sALAM
    //         </Grid>
    //         <Grid xl={2} lg={6}>
    //           Aaksma
    //         </Grid>

    //         <Grid xl={4} lg={12}>
    //           Aaksma
    //         </Grid>
    //       </Grid>
    //     </StyledFooter>
    //   </Grid>
    // </Box>
  );
};

export default Footer;

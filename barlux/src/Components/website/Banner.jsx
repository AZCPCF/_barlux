import React, { useEffect, useState } from "react";
import styled from "styled-components";
import json from "../../JSON/variables.json";
import { Grid } from "@mui/material";
const Banner = ({ count, bgcolor, lg, xs, height, mt, mb, isLg }) => {
  const StyledBanner = styled.div`
    height: ${height}vh;
    border-radius: 16px;
    margin: 50px 0;
    background-image: linear-gradient(
      ${json.color.default},
      ${json.color.gradient}
    );
    @media (max-width: 1199px) {
      & {
        margin-top: ${mt}px;
        margin-bottom: ${mb}px;
      }
    }
  `;
  const Multi = () => {
    return (
      <>
        <Grid xs={xs} item lg={lg}>
          <StyledBanner />
        </Grid>

        <Grid xs={xs} item lg={lg}>
          <StyledBanner />
        </Grid>

        <Grid xs={xs} item lg={lg}>
          <StyledBanner />
        </Grid>
      </>
    );
  };

  return (
    <Grid
      xs={12}
      container
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {count === 1 ? (
        <Grid item xs={xs} lg={lg}>
          <StyledBanner />
        </Grid>
      ) : (
        <Multi count={count} />
      )}
    </Grid>
  );
};
export default Banner;

import React, { useContext } from "react";
import { FiftyPersonDiv, Form } from "../../../Styles/Panel/AuthenticationStyle";
import { Grid } from "@mui/material";
import { ResponsiveContext } from "../../../Store/ResponsiveContext";
const Authentication = ({ children,handleSubmit }) => {
  const { md } = useContext(ResponsiveContext);
  return (
    <Grid container spacing={0} sx={{ direction: "rtl" }}>
      <Grid item xl={6} md={6} xs={12}>
        <FiftyPersonDiv style={{ height: md ? "30vh" : "100vh" }} />
      </Grid>
      <Grid item xl={6} md={6} xs={12}>
        <Form style={{ height: md ? "70vh" : "100vh" }} onSubmit={handleSubmit}>{children}</Form>
      </Grid>
    </Grid>
  );
};

export default Authentication;

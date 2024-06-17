import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { ResponsiveContext } from "../../Store/ResponsiveContext";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFound = () => {
  const { md } = useContext(ResponsiveContext);
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Typography
        variant={md ? "h3" : "h1"}
        gutterBottom
        color={"#4dc488"}
        zIndex={"1"}
      >
        404
      </Typography>
      <Typography variant={md ? "h4" : "h2"} gutterBottom pb={"50px"}>
        صفحه مورد نظر پیدا نشد
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{
          width: md?'200px':'25%',
          height: "5%",
          fontSize: md ? "14px" : "24px",
          color: "#fff",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        بازگشت به صفحه قبلی
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;

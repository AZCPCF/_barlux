import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Parent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const NotFound = () => {
    const navigate = useNavigate()
  return (
    <Parent>
      <Typography variant={"h4"} textAlign={'center'} sx={{height:'30%',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
        <h1 style={{transform:'rotate(95deg)'}}>{"):"}</h1>
        صفحه مورد نظر وجود ندارد
      </Typography>
      <Button onClick={() => {navigate('/')}}  variant="contained" sx={{textAlign:'center',color:"white",fontSize:'24px'}}>بازکشت به صفحه اصلی</Button>
    </Parent>
  );
};

export default NotFound;

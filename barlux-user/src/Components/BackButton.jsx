import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function BackButton() {
    const navigator = useNavigate()
  return (
    <Button
      variant="contained"
      sx={{ width: "15%", margin: "20px 20px", height: "50px" }}
      onClick={() => {
        navigator(-1)
      }}
    >
      بازگشت
    </Button>
  );
}

import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function AddButton({navigate}) {
    const navigator = useNavigate()
  return (
    <Button
      variant="contained"
      sx={{ width: "15%", margin: "20px 0px", height: "50px" }}
      onClick={() => {
        navigator(`/${navigate}`)
      }}
    >
      افزودن +
    </Button>
  );
}

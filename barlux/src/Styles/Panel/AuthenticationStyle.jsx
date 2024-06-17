import styled from "styled-components";
import variables from "../../JSON/variables.json";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export const FiftyPersonDiv = styled.div`
  background-color: ${variables.color[800]};
`;
export const Form = styled.form``;
export const LoginInput = styled(TextField)`
  direction: rtl;
  width: 60%;
  & > .MuiInputLabel-formControl {
    margin-top: 8px;
  }
  & > .MuiInputBase-input,
  .MuiOutlinedInput-input {
    height: 40px
  }
  & > .MuiInputBase-root,
  .MuiOutlinedInput-root,
  .MuiInputBase-colorPrimary,
  .MuiInputBase-formControl,
  .muirtl-1oxb3x4-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 16px;
  }
  @media (max-width: 900px) {
    & > .MuiInputBase-input,
  .MuiOutlinedInput-input {
    height: auto
  }
  & > .MuiInputLabel-formControl {
    margin-top: 0;
  }
  }
`;
export const LoginSubmit = styled(Button)`
  direction: rtl;
  width: 60%;
`;
export const Navigator = styled(Link)`
  color: ${variables.color[700]};
  text-decoration: solid;
`;
export const Error = styled(Typography)`
color: red;
`
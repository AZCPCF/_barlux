import { createTheme } from "@mui/material/styles";
import "../../src/App.css";
import json from '../links.json'
import { green } from "@mui/material/colors";
const Theme = createTheme({
  components:{
    MuiSvgIcon:{
      styleOverrides:{
        colorAction:green
      }
    }
  },
  palette: {
    primary: {
      main: "#4DC488",
    },
  },
  typography: {
    fontFamily: ["iranSans"].join(","), 
  },
});

export default Theme;

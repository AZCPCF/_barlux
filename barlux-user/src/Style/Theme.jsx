import { createTheme } from "@mui/material";
import "../../src/App.css";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#4DC488",
    },
  },
  typography: {
    fontFamily: ["iranSans", "sans-serif"].join(","), 
  },
});

export default Theme;

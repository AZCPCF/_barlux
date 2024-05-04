import { createTheme } from "@mui/material/styles";
import "../../src/App.css";
const Theme = createTheme({
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

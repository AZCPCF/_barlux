import { createTheme } from "@mui/material/styles";
import "../../src/App.css";
const Theme = createTheme({
  direction: "rtl",
  components: {

    MuiSvgIcon: {

      defaultProps: {

        color: 'disabled',

      },

    },

  },
  palette: {
    primary: {
      main: "#4DC488",
    },
    secondary:{
      main:"#fff"
    }
  },
  typography: {
    fontFamily: ["iranSans"].join(","), 
  },
});

export default Theme;

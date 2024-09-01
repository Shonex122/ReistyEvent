import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#BC172F",
  secondary: "#fff",
  soft: "#f3e5f5",
  fontColor: "#4D4D4D",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    soft: {
      main: Colors.soft,
    },
    fontColor: {
      main: Colors.fontColor,
    },
  },

  typography: {
    fontFamily: "outfit",
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material/";
import { List, Typography } from "@mui/material";
import { Colors } from "../themes";
import "@fontsource/outfit";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "32px",
  fontFamily: '"Outfit", "sans-serif" ',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  zIndex: 99,
  alignItems: "center",
}));
export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

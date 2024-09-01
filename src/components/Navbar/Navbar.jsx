import React from "react";
import { AppbarContainer, AppHeader, MyList } from "../../styles/appbar";
import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo_Icon from "../../assests/logo (1).svg";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppbarContainer>
      <AppHeader>
        <img src={logo_Icon} alt="" width={120} />
      </AppHeader>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "20px",
        }}
      >
        <MyList
          type="row"
          sx={{
            color: "#4D4D4D",
            textAlign: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <ListItem>
            <ListItemText primary="About" style={{ marginLeft: "80px" }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pricing" style={{ marginRight: "80px" }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Faq" style={{ marginLeft: "-80px" }} />
          </ListItem>
        </MyList>
      </Box>
      <Stack direction="row" spacing={1} sx={{ marginRight: "-60px" }}>
        <Link to="/login">
          <Button
            disableRipple
            sx={{
              width: "141px",
              cursor: "pointer",
              background: "none",
              color: "black",
              borderRadius: "35px",
              padding: "10px 20px",
              textTransform: "capitalize",
              border: "1px solid #E5E5E5",
            }}
          >
            <Typography variant="body1">Login In</Typography>
          </Button>
        </Link>
        <Link to="/SignUp">
          <Button
            sx={{
              width: "141px",
              marginLeft: "40px",
              textTransform: "capitalize",
              padding: "10px 20px",
              borderRadius: "35px",
              color: "white",
              backgroundColor: "#ba172f",
              "&:hover": {
                backgroundColor: "#ba172f",
              },
            }}
          >
            <Typography variant="body1">Sign Up</Typography>
          </Button>
        </Link>
      </Stack>
    </AppbarContainer>
  );
}

export default Navbar;

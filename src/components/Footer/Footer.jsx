import React from "react";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import logo_icon from "../../assests/logo (1).svg";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <Box>
      <Grid
        container
        display="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "10px auto" }}
      >
        <img src={logo_icon} alt="" width={"80px"} />
        <List
          sx={{
            display: "flex",
            marginRight: "250px",
            color: "#4D4D4D",
            fontSize: "32px",
          }}
        >
          <ListItem>
            <ListItemText primary="Discover" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Help" />
          </ListItem>
        </List>

        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
            <IconButton aria-label="LinkedIn" href="#">
              <EmailIcon sx={{ color: "#BC172F" }} />
            </IconButton>
            <IconButton aria-label="Instagram" href="#">
              <Instagram sx={{ color: "#BC172F" }} />
            </IconButton>
            <IconButton aria-label="Facebook" href="#">
              <Facebook sx={{ color: "#BC172F" }} />
            </IconButton>
            <IconButton aria-label="Twitter" href="#">
              <XIcon sx={{ color: "#BC172F" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

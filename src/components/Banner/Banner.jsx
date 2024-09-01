import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import banner from "../../assests/banner.png";
import { Colors } from "../../styles/themes";
import jetIcon from "../../assests/Group 2609642.svg";

function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 1,
        mt: 1,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6} mb={8}>
          <Grid>
            <Button
              variant="outlined"
              sx={{
                width: "320px",
                height: "50px",
                mb: 4,
                fontWeight: "900",
                borderRadius: "30px",
                color: Colors.primary,
                padding: "15px 10px",
                border: "none",
                background: Colors.soft,
                cursor: "default",
                "&:hover": {
                  border: "none",
                  background: Colors.soft,
                },
              }}
            >
              EVENT PLANNING MADE EASY
              <img
                src={jetIcon}
                alt=""
                style={{ width: 24, height: 24, marginLeft: 8 }}
              />
            </Button>
          </Grid>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Effortlessly Create
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Memorable Events with
          </Typography>
          <Typography
            variant="h2"
            className="bgReisty"
            sx={{
              fontWeight: "bold",
              color: Colors.primary,
              marginBottom: "16px",
            }}
          >
            Reisty
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ color: Colors.fontColor, lineHeight: "22px" }}
          >
            Reisty empowers you to seamlessly discover,host, and sell ticket for
            culinary,non-culinary, virtual and festive events, ensuring
            unforgettable experiences for all.
          </Typography>
          <Button
            sx={{
              width: "258px",
              height: "60px",
              mt: 2,
              padding: "15px 10px",
              background: Colors.primary,
              color: Colors.secondary,
              borderRadius: "40px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Create Your First Event
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="img" src={banner} alt="image" width="600px"></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;

import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputLabel,
  Grid,
  Button,
} from "@mui/material";
import { Colors } from "../../styles/themes";
import G from "../../assests/G.svg";
import "./SignupPage.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import NG from "../../assests/NG.png";
import InputAdornment from "@mui/material/InputAdornment";

function LoginSignup() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        boxShadow: "0px 4px 12px rgba(0,0,0, 0.1) ",
        borderRadius: "20px",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ marginTop: "20px", bgcolor: "#FFFFFF", mb: 4 }}>
        <Link to="/">
          <img src={G} alt="" style={{ marginTop: "15px" }} />
        </Link>
        <Typography variant="h4" sx={{ marginTop: "32px", fontWeight: "500" }}>
          Welcome to Reisty
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{
            color: Colors.fontColor,
            lineHeight: "22px",
            marginTop: "2px",
          }}
        >
          Fill in the information below to create an account
        </Typography>

        <Box component="form" sx={{ mt: 4 }}>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <div>
                <Typography sx={{ mb: 1 }}> First Name</Typography>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      bgcolor: "#E3E5E5",
                      border: "1px solid #E3E5E5",
                    },
                  }}
                  placeholder="First Name"
                />
              </div>
              <div>
                <Typography
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    mb: 1,
                  }}
                >
                  Last Name
                </Typography>
                <TextField
                  placeholder="Last Name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      bgcolor: "#E3E5E5",
                      border: "1px solid #E3E5E5",
                    },
                  }}
                />
              </div>
            </Stack>
          </Stack>

          <Stack sx={{ mt: 2 }}>
            <Stack direction={"row"} spacing={2}>
              <div>
                <Typography sx={{ mb: 1 }}>Phone Number</Typography>
                <TextField
                  placeholder=""
                  inputProps={{
                    startAdorement: (
                      <InputAdornment position="start">
                        <img src={NG} alt="" />
                        <Typography>+234</Typography>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      border: "1px solid #E3E5E5",
                    },
                    width: "110px",
                    mr: 2,
                    borderRadius: "20px",
                  }}
                />

                <TextField
                  placeholder="Phone Number"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      bgcolor: "#E3E5E5",
                      border: "1px solid #E3E5E5",
                    },
                    width: "375px",
                  }}
                />
              </div>
            </Stack>
          </Stack>

          <Stack sx={{ mt: 2 }}>
            <Stack direction={"row"} spacing={2}>
              <div>
                <Typography sx={{ mb: 1 }}>Password</Typography>
                <TextField
                  placeholder="****************************"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      bgcolor: "#E3E5E5",
                      border: "1px solid #E3E5E5",
                    },
                    width: "500px",
                  }}
                />
                <VisibilityOffIcon
                  sx={{
                    position: "relative",
                    top: "15px",
                    right: "40px",
                    color: Colors.fontColor,
                  }}
                />
              </div>
            </Stack>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body2"
              component="p"
              style={{ color: Colors.fontColor, lineHeight: "22px" }}
            >
              Your password must include
            </Typography>
            <Grid direction={"row"} spacing={2}>
              <Grid>
                <Typography
                  variant="body2"
                  style={{ color: Colors.fontColor, lineHeight: "22px" }}
                >
                  Mininum 8 Characters
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: Colors.fontColor, lineHeight: "22px" }}
                >
                  One Uppercase letter
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: Colors.fontColor, lineHeight: "22px" }}
                >
                  One numeric digit
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="body2"
                  style={{ color: Colors.fontColor, lineHeight: "22px" }}
                >
                  One lowercase letter
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: Colors.fontColor, lineHeight: "22px" }}
                >
                  One symbol (*,&,$,Etc)
                </Typography>
              </Grid>
            </Grid>

            <Stack sx={{ mt: 2 }}>
              <Stack spacing={2}>
                <div>
                  <Typography sx={{ mb: 1 }}> Confirm Password</Typography>
                  <TextField
                    placeholder="****************************"
                    sx={{
                      width: "500px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        bgcolor: "#E3E5E5",
                        border: "1px solid #E3E5E5",
                      },
                    }}
                  />
                  <VisibilityOffIcon
                    sx={{
                      position: "relative",
                      top: "15px",
                      right: "40px",
                      color: Colors.fontColor,
                    }}
                  />
                </div>
              </Stack>
            </Stack>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">
                  I agree to the terms & conditions
                </Typography>
              }
            />

            <Button
              sx={{
                mt: 4,
                width: "500px",
                height: "50px",
                bgcolor: "#2A2A2A",
                textTransform: "capitalize",
                borderRadius: "10px",
                "&:hover": {
                  background: "#2A2A2A",
                },
                color: Colors.secondary,
              }}
              fullWidth
            >
              <Typography variant="body1"> Sign Up</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              style={{
                color: Colors.fontColor,
                lineHeight: "22px",
                textAlign: "center",
              }}
            >
              Already have an account? <span className="Highlight">Login</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginSignup;

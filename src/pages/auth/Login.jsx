import {
  Paper,
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import G from "../../assests/G.svg";
import { Colors } from "../../styles/themes";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormControlLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Checkbox } from "@mui/material";

function SignupPage() {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ border: "1px solid red", minHeight: "80vh", mt: 4 }}
      >
        <Box sx={{ marginTop: "20px", bgcolor: "#FFFFFF", mb: 4 }}>
          <Link to="/">
            <img src={G} alt="" />
          </Link>
          <Typography
            variant="h4"
            sx={{ marginTop: "32px", fontWeight: "500" }}
          >
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
            Contiune with the email address you use to sign in
          </Typography>
          <Box component="form" sx={{ mt: 4 }}>
            <Stack sx={{ mt: 2 }}>
              <Stack direction={"row"} spacing={2}>
                <div>
                  <Typography sx={{ mb: 1 }}>Email Addrees</Typography>
                  <TextField
                    placeholder="Business Email Address"
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
                    Remember Me{" "}
                    <span className="Highlight1"> Forgot Password?</span>
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
                <Typography variant="body1"> Login</Typography>
              </Button>
              <Typography
                variant="subtitle1"
                style={{
                  color: Colors.fontColor,
                  lineHeight: "22px",
                  textAlign: "center",
                }}
              >
                Don't have an account yet?
                <span className="Highlight">Create your account here</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignupPage;

import React from "react";

import Banner from "../../components/Banner/Banner";
import { Divider } from "@mui/material";
import { Colors } from "../../styles/themes";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Banner />
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ borderColor: Colors.fontColor, borderWidth: 1 }}
      />
      <Footer />
    </>
  );
}

export default LandingPage;

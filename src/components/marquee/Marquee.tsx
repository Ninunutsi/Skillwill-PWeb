import React from "react";
import Companies from "./Companies";
import { LogosData } from "@/data/LogosData";
import { Box, Typography } from "@mui/material";
import { MarqueeBox } from "./MarqueeStyle";

const Marquee = () => {
  return (
    <MarqueeBox id="partners">
      <Typography variant="h5" color={"black"}>
        Trusted by the worlds best companies
      </Typography>
      <Box className="container">
        <Box className="Logos">
          <Companies data={LogosData} />
        </Box>
      </Box>
    </MarqueeBox>
  );
};

export default Marquee;

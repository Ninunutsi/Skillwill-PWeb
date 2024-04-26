import { Box, Typography } from "@mui/material";
import { FooterBox } from "./FooterStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "../header/Nav";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <Box sx={{ ...FooterBox }}>
      <Box className="container">
        <Box className="footer-content">
          <Link href={"/"}>
            <Image
              width={63}
              height={27}
              src="assets/whiteLogo.svg"
              alt="Logo"
            />
          </Link>
          <Nav />
        </Box>
        <Box className="copyright">
          <Typography variant="body1" color={"#fff"}>
            {t("copyright")}
          </Typography>
          <Box>
            <Link href="#">{t("privacy")}</Link>
            <Link href="#">{t("terms")}</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

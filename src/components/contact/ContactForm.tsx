"use client";

import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import InputForm from "../Forms/InputForm";
import Link from "next/link";
import BtnComponent from "../buttons/BtnComponent";
import useForm from "@/hooks/useForm";

const ContactForm = () => {
  const t = useTranslations("FormContent");

  const {
    FirstNameRef,
    LastNameRef,
    PhoneNumRef,
    EmailRef,
    checked,
    setChecked,
    onSubmit,
    warning,
  } = useForm();

  const handleCkeckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box component={"form"} onSubmit={onSubmit} mt={1}>
      <InputForm
        email={EmailRef}
        firstName={FirstNameRef}
        lastName={LastNameRef}
        phoneNumber={PhoneNumRef}
      />
      <FormGroup sx={{ mb: "24px" }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleCkeckboxChange}
              checked={checked}
              className="myCheckbox"
            />
          }
          label={
            <span className="Terms">
              {t("contactCheck")}
              <Link href={"#"}>{t("contactCheckSpan")}</Link>
            </span>
          }
        />
      </FormGroup>
      <BtnComponent
        content={warning ? t("warning") : t("submit")}
        bgColor={warning ? "red" : "#3D6ECF"}
        color="#fff"
        variant="contained"
      />
    </Box>
  );
};

export default ContactForm;

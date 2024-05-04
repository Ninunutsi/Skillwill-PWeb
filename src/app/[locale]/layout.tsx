import "./globals.css";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import { RootLayoutProps } from "@/interfaces/interfaces";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Box className="mainContent">
            <Header />
            {children}
            <Footer />
          </Box>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

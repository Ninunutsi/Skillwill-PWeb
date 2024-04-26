import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ge"],
  defaultLocale: "ge",
});

export const config = {
  matcher: ["/", "/(ge|en)/:path*"],
};

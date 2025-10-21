import type { Metadata } from "next";
import { Geist, Epilogue, Red_Hat_Display, Inter} from "next/font/google";
// import { ClashDisplay } from "../../utils/customFonts"; ${ClashDisplay.variable}
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const epilogue = Epilogue({
   variable: "--font-Epilogue",
   subsets: ["latin"],
});

const red_Hat_Display = Red_Hat_Display({
   variable: "--font-Red_Hat_Display",
   subsets: ["latin"],
});
const inter = Inter({
   variable: "--font-Inter",
   subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobHuntly",
  description: "Jobhuntly is an online job search platform designed to connect job seekers with top employers across various industries. It offers a seamless and user-friendly experience, allowing users to browse, apply, and track job opportunities effortlessly while helping companies find the right talent faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${red_Hat_Display.variable} ${inter.variable}   ${epilogue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



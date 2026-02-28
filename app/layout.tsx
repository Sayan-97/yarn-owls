import type { Metadata } from "next";
import { Instrument_Serif, Raleway } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-raleway",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Yarn Owls",
  description: "",
};

import { ThemeScrollProvider } from "@/components/theme-scroll-provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${instrumentSerif.variable}`}>
        <ThemeScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeScrollProvider>
      </body>
    </html>
  );
}

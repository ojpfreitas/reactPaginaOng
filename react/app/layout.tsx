import "./globals.css";
import type { ReactNode } from "react";
import { Roboto, Open_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-open",
});

export const metadata = {
  title: "Home",
  description: "Site ONG",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
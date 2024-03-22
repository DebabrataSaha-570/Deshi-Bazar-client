import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deshi Bazar ",
  description: "Deshi Bazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}

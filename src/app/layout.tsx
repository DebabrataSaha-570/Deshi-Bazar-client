import type { Metadata } from "next";
import { Inter, Roboto, Quicksand } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ weight: "300", subsets: ["latin"] });
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
      <body className={quickSand.className}>{children}</body>
      {/* <body className={roboto.className}>{children}</body> */}
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}

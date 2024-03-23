import React from "react";
import CommonLayout from "../(withCommonLayout)/layout";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deshi Bazar | Flash Sale",
  description: "Generated by create next app",
};

const FlashSale = () => {
  return (
    <CommonLayout>
      <h2>This is flash Sale page</h2>
    </CommonLayout>
  );
};

export default FlashSale;

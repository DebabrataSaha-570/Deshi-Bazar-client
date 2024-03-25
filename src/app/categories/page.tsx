"use client";
import React from "react";
import CommonLayout from "../(withCommonLayout)/layout";
import type { Metadata } from "next";
import UseCountDown from "@/components/ui/UseCountDown";

// export const metadata: Metadata = {
//   title: "Deshi Bazar | Categories",
//   description: "Generated by create next app",
// };

const Categories = () => {
  return (
    <CommonLayout>
      <h3>This is categories page</h3>
      <UseCountDown
        InitialHours={10}
        InitialMinutes={0}
        InitialSeconds={0}
      ></UseCountDown>
    </CommonLayout>
  );
};

export default Categories;

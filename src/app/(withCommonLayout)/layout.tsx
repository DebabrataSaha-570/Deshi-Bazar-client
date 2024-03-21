import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;

import React, { ReactNode } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Link from "next/link";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineCalculate } from "react-icons/md";
// import { useRouter } from "next/router";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  //   const router = useRouter();
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>

      {/* sidebar  */}

      <div className="drawer lg:drawer-open z-10">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-8 my-5">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4  w-72 min-h-full bg-secondary text-white mt-[60px] lg:mt-0">
            {/* Sidebar content here */}

            <Link
              href="/Dashboard"
              className="px-4 py-3 text-base rounded-lg mb-3 "
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-2xl">
                  <MdOutlineCalculate />
                </span>{" "}
                Product Statistics
              </h3>
            </Link>

            <Link
              href="/Dashboard/allProducts"
              className="px-4 py-3 text-base rounded-lg mb-3 bg-primary"
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-xl">
                  <FaListUl />
                </span>{" "}
                All Supplies
              </h3>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

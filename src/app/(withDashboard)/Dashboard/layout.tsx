"use client";
import React, { ReactNode, useEffect, useState } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Link from "next/link";
import { FaListUl } from "react-icons/fa6";
import { drawerItems } from "@/utils/drawer-items";
import { UserRole } from "@/types";
import { getUserInfo } from "@/app/services/auth.service";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState("");

  const pathName = usePathname();

  useEffect(() => {
    const { role } = getUserInfo() as any;
    console.log(role);
    setUserRole(role);
  }, []);
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

            {drawerItems(userRole as UserRole).map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={
                  pathName === item.path
                    ? "px-4 py-3 text-base rounded-lg mb-3 bg-primary"
                    : "px-4 py-3 text-base rounded-lg mb-3 bg-secondary"
                }
              >
                <h3 className="flex items-center gap-3">
                  {" "}
                  <span className="text-xl">
                    {item.icon && <item.icon />}
                  </span>{" "}
                  {item.title}
                </h3>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

"use client";
import { getUserInfo, removeUser } from "@/app/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import AuthButton from "../ui/AuthButton/AuthButton";
import { FaUserAlt } from "react-icons/fa";

type TUser = {
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
};

const DashboardNavbar = () => {
  const [userInfo, setUser] = useState<TUser | null>(null);
  const router = useRouter();
  useEffect(() => {
    const user = getUserInfo() as any;
    console.log(user);
    setUser(user);
  }, []);

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="navbar ">
        <div className="flex-1">
          <label
            htmlFor="my-drawer-2"
            tabIndex={1}
            className="btn btn-secondary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link href="/" className="btn btn-ghost text-xl text-white">
            <Image
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/fast-cart.png"
              width={34}
              height={34}
              alt="logo"
            ></Image>
            Deshi Bazar
          </Link>
        </div>
        <div className="flex-none text-gray-300">
          {/* <AuthButton></AuthButton> */}
          <div className="dropdown dropdown-end text-end mx-2">
            <h2 className=" text-sm md:text-base font-semibold capitalize">
              {userInfo?.name}
            </h2>
            <p className="text-sm">{userInfo?.role}</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-15"
            >
              <div className=" rounded-full">
                <FaUserAlt className="text-[30px]" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-white rounded-box w-52 space-y-2"
            >
              <li onClick={handleLogout}>
                <a>
                  {" "}
                  <span className="text-xl">
                    <MdLogout />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

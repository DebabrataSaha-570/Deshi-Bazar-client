import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const DashboardNavbar = () => {
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
          <div className="dropdown dropdown-end text-end mx-2">
            <h2 className=" text-sm md:text-base font-semibold">
              Debabrata Saha
            </h2>
            <p className="text-sm">Admin</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-15"
            >
              <div className=" rounded-full">
                <Image
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="Admin Image"
                  src="https://avatars.githubusercontent.com/u/76751534?v=4"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-white rounded-box w-52 space-y-2"
            >
              <li>
                <a>
                  {" "}
                  <span className="text-xl">
                    {" "}
                    <CgProfile />
                  </span>{" "}
                  Profile
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <span className="text-xl">
                    <FaGear />
                  </span>{" "}
                  Settings
                </a>
              </li>
              <li>
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

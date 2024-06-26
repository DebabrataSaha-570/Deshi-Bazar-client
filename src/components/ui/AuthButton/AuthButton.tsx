import {
  getUserInfo,
  isLoggedIn,
  removeUser,
} from "@/app/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const AuthButton = () => {
  const islogin = isLoggedIn();
  const router = useRouter();
  const userInfo: any = getUserInfo();
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {islogin ? (
        // <span onClick={handleLogout}>Logout</span>
        <>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-15"
            >
              <div className=" ">
                <FaUserAlt className="text-[20px]" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-white rounded-box w-52 space-y-2"
            >
              <li>
                <a>
                  {" "}
                  <span className="text-xl">
                    {" "}
                    <CgProfile />
                  </span>{" "}
                  {userInfo?.name}
                </a>
              </li>

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
        </>
      ) : (
        <Link className="btn" href="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default AuthButton;

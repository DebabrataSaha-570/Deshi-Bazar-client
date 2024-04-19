import { isLoggedIn, removeUser } from "@/app/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const islogin = isLoggedIn();
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {islogin ? (
        <li>
          <span onClick={handleLogout}>Logout</span>
        </li>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );
};

export default AuthButton;

"use client";

import Container from "@/components/ui/Container";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <>
      <section className="bg-primary text-[--white] sticky top-0 z-50">
        <Container>
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[--white]"
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/categories">Categories</Link>
                  </li>
                  <li>
                    <Link href="/products/allProducts">Products</Link>
                  </li>
                  <li>
                    <Link href="/flashSale">Flash Sale</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/Dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>
              <Link href="/" className="btn btn-ghost text-2xl text-[--white]">
                <Image
                  src="https://img.icons8.com/pastel-glyph/64/FFFFFF/fast-cart.png"
                  width={34}
                  height={34}
                  alt="logo"
                ></Image>
                Deshi Bazar
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/products/allProducts">Products</Link>
                </li>
                <li>
                  <Link href="/flashSale">Flash Sale</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/Dashboard">Dashboard</Link>
                </li>
                <AuthButton></AuthButton>
                {/* {islogin ? (
                  <li>
                    <span onClick={handleLogout}>Logout</span>
                  </li>
                ) : (
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                )} */}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;

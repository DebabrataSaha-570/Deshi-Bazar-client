import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import paymentImage from "../../../assets/visa_masterCard_americanExpress.png";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-700 text-[--white] py-10 px-7 ">
        <Container className="md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <a className=" text-2xl text-[--white] flex font-bold  items-start gap-3 mb-5">
                <Image
                  src="https://img.icons8.com/pastel-glyph/64/FFFFFF/fast-cart.png"
                  width={40}
                  height={40}
                  alt="logo"
                ></Image>
                Deshi Bazar
              </a>

              <div className="space-y-3">
                <p className="text-base text-gray-400 underline">
                  store Location
                </p>
                <p>
                  56/2 Chittagong Road, Noakhali Sadar, Noakhali, Bangladesh{" "}
                </p>

                <p className="text-gray-400">Sat – Thu: 9am – 8pm</p>
              </div>
            </div>
            {/* <div>
              <h3 className="text-xl font-semibold mb-8">Customer</h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Help Center
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  My Account
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Track My Order
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Return Policy
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Gift Cards
                </Link>
              </div>
            </div> */}
            <div>
              <h3 className="text-xl font-semibold mb-8">About Us</h3>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Company Info
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Press Releases
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Careers
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Reviews
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Investor Relations
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-8">Trending Products</h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Puffed Rice (Muri)
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Lentils (Dal)
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Mustard Oil (Sarson Tel)
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Jaggery (Gur)
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Spices (Masala)
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-8">Categories</h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Fresh Produce
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Pantry Staples
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Dairy & Eggs
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Frozen Foods
                </Link>
                <Link
                  href="/"
                  className="block hover:text-[--lightGreen] transition duration-500"
                >
                  Snacks & Beverages
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-8">Contact Us</h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className=" flex  items-center gap-2 hover:text-[--lightGreen] transition duration-500"
                >
                  <FaLocationDot /> Noakhali, Bangladesh
                </Link>
                <Link
                  href="/"
                  className="flex  items-center gap-2 hover:text-[--lightGreen] transition duration-500"
                >
                  <FaPaperPlane /> deshibazar123@gmail.com
                </Link>
                <Link
                  href="/"
                  className="flex  items-center gap-2 hover:text-[--lightGreen] transition duration-500"
                >
                  <FaPhone /> +88016238894
                </Link>
                <div className="flex justify-between max-w-[50%] md:max-w-[60%] gap-2">
                  <a
                    href="https://github.com/DebabrataSaha-570"
                    className="border rounded-full p-3 hover:bg-[#1999DC] transition duration-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://github.com/DebabrataSaha-570"
                    className="border rounded-full p-3 hover:bg-[#39548D] transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://github.com/DebabrataSaha-570"
                    className="border rounded-full p-3 hover:bg-[#D10304] transition duration-500"
                  >
                    <FaPinterestP />
                  </a>
                  <a
                    href="https://github.com/DebabrataSaha-570"
                    className="border rounded-full p-3 hover:bg-[#B32997] transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* sub footer */}
          <section className="text-[--color4] py-10">
            <hr className="border-b-1 border-[--color5]" />

            <div className="py-3 flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <p>
                  Copyright ©{new Date().getFullYear()} by{" "}
                  <span className="text-[--lightGreen]">Debabrata Saha</span>.
                  All rights reserved.
                </p>
              </div>

              <div>
                <Image
                  width={200}
                  height={200}
                  src={paymentImage}
                  alt="payment_image"
                ></Image>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Footer;

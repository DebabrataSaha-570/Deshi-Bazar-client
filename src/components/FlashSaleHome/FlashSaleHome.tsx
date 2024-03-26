import React from "react";
import Container from "../ui/Container";
import SecondaryButton from "../ui/SecondaryButton";
import { TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";
import UseCountDown from "../ui/UseCountDown";

const FlashSaleHome = async () => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/products",
    {
      // const res = await fetch("http://localhost:5000/api/v1/products", {
      next: {
        revalidate: 30, // data will be load in every 30s
      },
    }
  );
  const products = await res.json();

  const flashSaleProducts = products.filter(
    (item: TProduct) => item.flash_sale == true
  );

  return (
    <Container className="px-8 my-16">
      <div className="flex  justify-between items-center">
        <h2 className="text-4xl font-semibold">Flash Sale</h2>

        <div className="hidden md:flex items-center gap-5 md:mx-5">
          <h3 className="text-2xl ">Ending In </h3>
          <UseCountDown
            InitialHours={10}
            InitialMinutes={5}
            InitialSeconds={7}
          ></UseCountDown>{" "}
        </div>

        <Link href="/flashSale">
          <SecondaryButton>View All</SecondaryButton>
        </Link>
      </div>

      <div className="flex md:hidden items-center gap-5 my-4">
        <h3 className="text-2xl ">Ending In </h3>
        <UseCountDown
          InitialHours={10}
          InitialMinutes={5}
          InitialSeconds={7}
        ></UseCountDown>{" "}
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          {flashSaleProducts.slice(0, 4).map((item: TProduct) => (
            <ProductCard
              key={item._id}
              product={item}
              showRating={false}
            ></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FlashSaleHome;

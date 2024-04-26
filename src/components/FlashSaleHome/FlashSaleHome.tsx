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
      next: {
        revalidate: 30, // data will be load in every 30s
      },
    }
  );
  const products = await res.json();

  const vegetableFlashProducts = products.filter(
    (item: TProduct) =>
      item.flash_sale && item.categories == "vegetables_fruits"
  );

  const cookingFlashProducts = products.filter(
    (item: TProduct) => item.flash_sale && item.categories == "cooking"
  );

  const dairyFlashProducts = products.filter(
    (item: TProduct) => item.flash_sale && item.categories == "dairy"
  );

  const fishFlashProducts = products.filter(
    (item: TProduct) => item.flash_sale && item.categories == "fish"
  );

  return (
    <Container className="px-8 my-16">
      <div className="flex  justify-between items-center">
        <h2 className="text-4xl font-semibold">Flash Sale</h2>

        <div className="hidden md:flex items-center gap-5 md:mx-5">
          <h3 className="text-2xl ">Ends In </h3>
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

      <div className="flex md:hidden items-center gap-5 mt-7">
        <h3 className="text-2xl ">Ends In</h3>
        <UseCountDown
          InitialHours={10}
          InitialMinutes={5}
          InitialSeconds={7}
        ></UseCountDown>{" "}
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          <div>
            {vegetableFlashProducts.slice(0, 1).map((item: TProduct) => (
              <ProductCard
                key={item._id}
                product={item}
                showRating={false}
              ></ProductCard>
            ))}
          </div>
          <div>
            {cookingFlashProducts.slice(0, 1).map((item: TProduct) => (
              <ProductCard
                key={item._id}
                product={item}
                showRating={false}
              ></ProductCard>
            ))}
          </div>
          <div>
            {dairyFlashProducts.slice(0, 1).map((item: TProduct) => (
              <ProductCard
                key={item._id}
                product={item}
                showRating={false}
              ></ProductCard>
            ))}
          </div>
          <div>
            {fishFlashProducts.slice(0, 1).map((item: TProduct) => (
              <ProductCard
                key={item._id}
                product={item}
                showRating={false}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashSaleHome;

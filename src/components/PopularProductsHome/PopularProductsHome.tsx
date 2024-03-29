import React from "react";
import Container from "../ui/Container";
import SecondaryButton from "../ui/SecondaryButton";
import { TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

const PopularProductsHome = async () => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/products",
    {
      // const res = await fetch("http://localhost:5000/api/v1/products", {
      next: {
        revalidate: 30, // data will be fetched in every 30s
      },
    }
  );
  const products = await res.json();

  const popularProducts = products.filter(
    (item: TProduct) => item.ratings == 5
  );

  const dairyProducts = popularProducts.filter(
    (item: TProduct) => item.categories == "dairy"
  );

  const fishProducts = popularProducts.filter(
    (item: TProduct) => item.categories == "fish"
  );

  const cookingProducts = popularProducts.filter(
    (item: TProduct) => item.categories == "cooking"
  );

  const vegetablesProducts = popularProducts.filter(
    (item: TProduct) => item.categories == "vegetables_fruits"
  );

  return (
    <Container className="px-8 my-16">
      <div className="flex justify-between items-center ">
        <h2 className=" text-4xl md:text-4xl font-semibold max-w-[60%]">
          Popular Products
        </h2>

        <Link href="/products/allProducts">
          <SecondaryButton>View All</SecondaryButton>
        </Link>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          {dairyProducts.slice(0, 2).map((item: TProduct) => (
            <ProductCard
              key={item._id}
              product={item}
              showRating={true}
            ></ProductCard>
          ))}
          {cookingProducts.slice(1, 3).map((item: TProduct) => (
            <ProductCard
              key={item._id}
              product={item}
              showRating={true}
            ></ProductCard>
          ))}

          {vegetablesProducts.slice(1, 3).map((item: TProduct) => (
            <ProductCard
              key={item._id}
              product={item}
              showRating={true}
            ></ProductCard>
          ))}
          {fishProducts.slice(0, 2).map((item: TProduct) => (
            <ProductCard
              key={item._id}
              product={item}
              showRating={true}
            ></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularProductsHome;

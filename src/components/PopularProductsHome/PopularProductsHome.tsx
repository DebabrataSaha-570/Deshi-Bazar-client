import React from "react";
import Container from "../ui/Container";
import SecondaryButton from "../ui/SecondaryButton";
import { TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";

const PopularProductsHome = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  const popularProducts = products.filter(
    (item: TProduct) => item.ratings == 5
  );

  return (
    <Container className="px-8 my-16">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Most Popular Products</h2>

        <SecondaryButton>View All</SecondaryButton>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
          {popularProducts.slice(0, 8).map((item: TProduct) => (
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

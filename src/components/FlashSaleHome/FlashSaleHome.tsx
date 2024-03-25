import React from "react";
import Container from "../ui/Container";
import SecondaryButton from "../ui/SecondaryButton";
import { TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

const FlashSaleHome = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30, // data will be load in every 30s
    },
  });
  const products = await res.json();

  const flashSaleProducts = products.filter(
    (item: TProduct) => item.flash_sale == true
  );

  return (
    <Container className="px-8 my-16">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Flash Sale</h2>

        <Link href="/flashSale">
          <SecondaryButton>View All</SecondaryButton>
        </Link>
        {/* <SecondaryButton>
          <Link href="/flashSale">View All</Link>
        </SecondaryButton> */}
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

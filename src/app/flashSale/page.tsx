import React from "react";
import CommonLayout from "../(withCommonLayout)/layout";
import type { Metadata } from "next";
import { TProduct } from "@/types";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
// import useCountDown from "@/lib/useCountDown";

export const metadata: Metadata = {
  title: "Deshi Bazar | Flash Sale",
  description: "Generated by create next app",
};

const FlashSale = async () => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/products"
  ); //data will be cached
  // const res = await fetch("http://localhost:5000/api/v1/products"); //data will be cached
  const products = await res.json();

  const flashSaleProducts = products.filter(
    (item: TProduct) => item.flash_sale == true
  );

  // const { hours, minutes, seconds } = useCountDown(10, 0, 0);

  return (
    <CommonLayout>
      <Container className="px-8 mt-10 mb-16">
        <div>
          <h2 className="text-3xl font-semibold">Flash Sale</h2>
        </div>

        {/* <UseCountDown
          InitialHours={10}
          InitialMinutes={0}
          InitialSeconds={0}
        ></UseCountDown> */}

        {/* <div className="flex gap-5 text-center auto-cols-max">
          <h2>Ends In:</h2>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            sec
          </div>
        </div> */}

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
            {flashSaleProducts.map((item: TProduct) => (
              <ProductCard
                key={item._id}
                product={item}
                showRating={false}
              ></ProductCard>
            ))}
          </div>
        </div>
      </Container>
    </CommonLayout>
  );
};

export default FlashSale;

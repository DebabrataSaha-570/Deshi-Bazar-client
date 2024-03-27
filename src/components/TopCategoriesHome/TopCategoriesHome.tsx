import React from "react";
import Container from "../ui/Container";
import vegetableImage from "@/assets/categories/vegetables.jpg";
import cookingImage from "@/assets/categories/cooking.jpg";
import dairyImage from "@/assets/categories/dairy.jpg";
import fishImage from "@/assets/categories/fish.jpg";
import Image from "next/image";
import Link from "next/link";

const TopCategoriesHome = () => {
  return (
    <Container className="px-10 my-24">
      <div className="md:max-w-[50%] mx-auto text-center mb-10">
        <h3 className="text-4xl font-semibold mb-3">Top Categories</h3>
        <h4 className="text-xl leading-relaxed text-gray-500 my-5">
          Shop Smart, Eat Well: Explore Our Top Categories for Sustainably
          Sourced Staples and Organic Treats!
        </h4>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 ">
          <div className="relative rounded-lg row-span-2 border h-[300px] md:h-[500px] ">
            <Link href="/vegetables_fruits">
              <Image
                src={vegetableImage}
                width={0}
                height={0}
                alt="vegetable_image"
                style={{ width: "100%", height: "100%" }}
                className="object-cover rounded-lg category-image"
              ></Image>

              <h3 className="absolute bottom-[15px] left-[15px] z-10 text-xl font-semibold text-white">
                Vegetable and Fruits
              </h3>
            </Link>
          </div>
          <div className="relative rounded-lg category-image h-[300px] md:h-[240px]">
            <Link href="/cooking">
              <Image
                src={cookingImage}
                width={0}
                height={0}
                // sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt="vegetable_image"
                className="object-cover rounded-lg category-image"
              ></Image>
              <h3 className="absolute bottom-[15px] left-[15px]  text-xl font-semibold text-white">
                Cooking
              </h3>
            </Link>
          </div>
          <div className="relative rounded-lg row-span-2 h-[300px] md:h-[500px] ">
            <Link href="/dairy">
              <Image
                src={dairyImage}
                width={0}
                height={0}
                alt="vegetable_image"
                // sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="object-cover rounded-lg category-image"
              ></Image>
              <h3 className="absolute bottom-[15px] left-[15px]  text-xl font-semibold text-white">
                Dairy
              </h3>
            </Link>
          </div>
          <div className="relative rounded-lg h-[300px] md:h-[240px]">
            <Link href="/fish ">
              <Image
                src={fishImage}
                width={0}
                height={0}
                alt="vegetable_image"
                // sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="object-cover rounded-lg category-image"
              ></Image>
              <h3 className="absolute bottom-[15px] left-[15px] z-10 text-xl font-semibold text-white">
                Fish
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TopCategoriesHome;

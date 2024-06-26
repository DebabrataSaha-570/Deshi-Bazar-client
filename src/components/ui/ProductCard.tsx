import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { LuPlusCircle } from "react-icons/lu";

const ProductCard = ({
  product,
  showRating,
}: {
  product: TProduct;
  showRating: boolean;
}) => {
  const percentage =
    ((product.price - product.previous_price) / product.previous_price) * 100;

  const ratingsArray = product?.reviews;
  let ratingAverage = 0;

  // Check if ratingsArray exists and has length
  if (ratingsArray?.length) {
    const ratingSum = ratingsArray.reduce((acc, curr) => acc + curr.rating, 0);

    // Calculate average rating
    ratingAverage = ratingSum / ratingsArray.length;
  } else {
  }

  //if rating value is 3, it will generate three gold star and 2 gray start.. (but it can't generate half start right now. will hove to look later  solving this problem)
  const generateRatingInputs = (rating: number) => {
    const ratingArray = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product.title}`}
            className="bg-[#FACA51] mask mask-star-2"
            disabled
          />
        );
      } else {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product.title}`}
            className="bg-gray-300 mask mask-star-2"
            disabled
          />
        );
      }
    }

    return ratingArray;
  };

  return (
    <Link href={`/products/${product.categories}/${product._id}`}>
      <div className="  rounded-md  cursor-pointer  h-[420px] p-3 border hover:border-black transition duration-500">
        <div className="relative">
          <Image
            src={product.first_image}
            alt="product_image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "320px", height: "320px" }}
            className="object-cover  "
          ></Image>
          <p className="px-3 py-1 rounded-full bg-gray-700 text-white inline-block absolute top-0 text-sm">
            {parseInt(percentage.toString())}%
          </p>
        </div>
        <div>
          <h3 className="text-xl font-normal hover:text-[--mediumGreen] transition duration-300 ">
            {product.title}
          </h3>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 text-base ">
              <p className="text-gray-500 line-through  ">
                &#2547;{product.previous_price}
              </p>
              <p>&#2547;{product.price}</p>
            </div>
            <span>
              <LuPlusCircle className="text-[20px]" />
            </span>
          </div>
        </div>
        {showRating && (
          <div className="rating rating-md rating-half">
            {generateRatingInputs(ratingAverage)}
            <span className="text-gray-500 mx-3">
              ({product.reviews.length})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

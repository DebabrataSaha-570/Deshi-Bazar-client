"use client";
import CommonLayout from "@/app/(withCommonLayout)/layout";
import { isLoggedIn } from "@/app/services/auth.service";
import ProductDetails from "@/components/ui/ProductDetails";
import { TProductId } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SingleProductPage = ({ params }: TProductId) => {
  const productId = params.productId;
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <CommonLayout>
      <ProductDetails productId={productId}></ProductDetails>
    </CommonLayout>
  );
};

export default SingleProductPage;

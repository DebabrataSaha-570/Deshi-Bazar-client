"use client";
import CommonLayout from "@/app/(withCommonLayout)/layout";
import { isLoggedIn } from "@/app/services/auth.service";
import Container from "@/components/ui/Container";
import ProductDetailCarousel from "@/components/ui/ProductDetailCarousel";
import ProductDetails from "@/components/ui/ProductDetails";
import { TProduct, TProductId } from "@/types";
import { useRouter } from "next/navigation";
import { LiaCarSideSolid } from "react-icons/lia";
import { SiHackthebox } from "react-icons/si";

const SingleProductPage = ({ params }: TProductId) => {
  const productId = params.productId;
  const router = useRouter();
  if (!isLoggedIn()) {
    router.push("/login");
  }

  return (
    <CommonLayout>
      <ProductDetails productId={productId}></ProductDetails>
    </CommonLayout>
  );
};

export default SingleProductPage;

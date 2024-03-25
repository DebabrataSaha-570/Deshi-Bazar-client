import FlashSaleHome from "@/components/FlashSaleHome/FlashSaleHome";
import PopularProductsHome from "@/components/PopularProductsHome/PopularProductsHome";
import TopCategoriesHome from "@/components/TopCategoriesHome/TopCategoriesHome";
import Banner from "@/components/ui/Banner/Banner";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <FlashSaleHome></FlashSaleHome>
      <TopCategoriesHome></TopCategoriesHome>
      <PopularProductsHome></PopularProductsHome>
    </main>
  );
}

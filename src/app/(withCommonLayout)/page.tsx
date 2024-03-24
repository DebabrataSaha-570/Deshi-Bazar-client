import FlashSaleHome from "@/components/FlashSaleHome/FlashSaleHome";
import PopularProductsHome from "@/components/PopularProductsHome/PopularProductsHome";
import Banner from "@/components/ui/Banner/Banner";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <FlashSaleHome></FlashSaleHome>
      <PopularProductsHome></PopularProductsHome>
    </main>
  );
}

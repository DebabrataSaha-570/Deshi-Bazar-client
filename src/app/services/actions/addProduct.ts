type TAddProduct = {
  quantity_unit: string;
  categories: string;
  flash_sale: string;
  availability: string;
  title: string;
  quantity: number;
  price: number;
  first_image: string;
  second_image: string;
  third_image: string;
  fourth_image: string;
  description: string;
};

export const addProduct = async (addProductData: TAddProduct) => {
  const res = await fetch(
    // "http://localhost:5000/api/v1/product",
    "https://deshi-bazar-server.vercel.app/api/v1/product",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProductData),
      cache: "no-store",
    }
  );

  const productInfo = await res.json();
  return productInfo;
};

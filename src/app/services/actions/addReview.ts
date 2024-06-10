type TReviewData = {
  productId: string;
  reviewText: {
    name: string;
    email: string;
    rating: number;
    review: string;
  };
};

export const addReview = async (reviewData: TReviewData) => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/review",
    {
      // const res = await fetch("http://localhost:5000/api/v1/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
      cache: "no-store",
    }
  );

  const reviewPostInfo = await res.json();
  return reviewPostInfo;
};

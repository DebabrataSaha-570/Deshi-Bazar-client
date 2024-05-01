import { getUserInfo } from "@/app/services/auth.service";
import React, { useState } from "react";

const ProductReview = () => {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const userInfo: any = getUserInfo();

  const handleAddRating = (e: any) => {
    setRating(parseInt(e.target.value));
  };
  const handleReview = (e: any) => {
    setReview(e.target.value);
  };

  const handleCancel = () => {
    setRating(1);
    setReview("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = {
      name: userInfo?.name,
      email: userInfo?.email,
      rating,
      review,
    };
    console.log(reviewData);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 my-10">
      <div>
        <h2>Reviews carousel</h2>
      </div>

      <div>
        <form
          onSubmit={handleFormSubmit}
          className="shadow-lg p-5 rounded-md space-y-3"
        >
          <h2 className="text-xl font-bold">Submit Review</h2>
          <div className="rating block">
            <input
              type="radio"
              name="rating-4"
              value="1"
              checked={rating === 1}
              className="mask mask-star-2 bg-[#FACA51]"
              onClick={handleAddRating}
            />
            <input
              type="radio"
              name="rating-4"
              value="2"
              className="mask mask-star-2 bg-[#FACA51]"
              onClick={handleAddRating}
              checked={rating === 2}
            />
            <input
              type="radio"
              name="rating-4"
              value="3"
              checked={rating === 3}
              className="mask mask-star-2 bg-[#FACA51]"
              onClick={handleAddRating}
            />
            <input
              type="radio"
              name="rating-4"
              value="4"
              checked={rating === 4}
              className="mask mask-star-2 bg-[#FACA51]"
              onClick={handleAddRating}
            />
            <input
              type="radio"
              name="rating-4"
              value="5"
              checked={rating === 5}
              className="mask mask-star-2 bg-[#FACA51]"
              onClick={handleAddRating}
            />
          </div>

          <textarea
            placeholder="write review here"
            className="textarea textarea-bordered textarea-lg w-full "
            value={review}
            onChange={handleReview}
            required
          ></textarea>

          <button type="button" onClick={handleCancel} className="btn">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mx-3">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductReview;

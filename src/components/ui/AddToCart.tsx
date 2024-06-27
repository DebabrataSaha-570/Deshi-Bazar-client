import React, { useState } from "react";

const AddToCart = () => {
  const [count, setCount] = useState(1);
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-5">
      <div className="grid grid-cols-3 gap-3">
        <div className="flex justify-around items-center gap-4 border border-gray-300 rounded-full">
          <button onClick={handleDecreaseCount} className="text-2xl">
            {" "}
            -{" "}
          </button>
          <p>{count}</p>
          <button onClick={handleIncreaseCount} className="text-2xl">
            {" "}
            +{" "}
          </button>
        </div>

        <button className="col-span-2 btn btn-primary rounded-full">
          Add To Cart
        </button>
      </div>

      <button className=" mt-5 w-full btn btn-outline btn-primary rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCart;

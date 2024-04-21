import React from "react";

const DashboardAddProductPage = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold">Add Product</h3>

      <div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 shadow-md px-5 py-5 rounded-md">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">
                Product Title
              </span>
            </div>
            <input
              type="text"
              placeholder="enter product name.."
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">Quantity</span>
            </div>
            <input
              type="number"
              placeholder="enter product quantity.."
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">
                Quantity Unit
              </span>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                select unit
              </option>
              <option value="bundle">Bundle</option>
              <option value="kg">Kg</option>
              <option value="gm">gm</option>
              <option value="litre">Litre</option>
              <option value="Pcs">Pcs</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">
                Previous Price
              </span>
            </div>
            <input
              type="number"
              placeholder="enter previous price.."
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">
                Current Price
              </span>
            </div>
            <input
              type="number"
              placeholder="enter current price.."
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">Ratings</span>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Select Ratings
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">Categories</span>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Select Categories
              </option>
              <option value="vegetables_fruits">Vegetables and fruits</option>
              <option value="fish">Fish</option>
              <option value="cooking">Cooking</option>
              <option value="dairy">Dairy</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">Flash Sale</span>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Select Flash
              </option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-md font-bold">Availability</span>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Select Availability
              </option>
              <option value="Available">Available</option>
              <option value="In Stock">In Stock</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default DashboardAddProductPage;

"use client";
import React from "react";

const ProductFilter = () => {
  return (
    <div className="  ">
      <div className="drawer lg:drawer-open">
        <input id="filterSidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div className="drawer-side z-40 overflow-y-hidden">
          <label
            htmlFor="filterSidebar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className=" w-60 min-h-screen md:min-h-[400px]  bg-white  px-5 py-7  mt-[60px] md:mt-5">
            <div className="border p-5">
              <h3 className=" border-white border-l-black font-bold border-4 gap-3 px-3">
                Price Range
              </h3>

              <div className="form-control  ">
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    // defaultChecked
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text"> &#2547; 1 - &#2547; 100</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    // defaultChecked
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text"> &#2547; 100 - &#2547; 200</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    // defaultChecked
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text"> &#2547; 300 - &#2547; 400</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    // defaultChecked
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text"> &#2547; 400 - &#2547; 500</span>
                </label>
              </div>
            </div>
            <div className="border p-5 mt-5">
              <h3 className=" border-white border-l-black font-bold border-4 gap-3 px-3">
                Categories
              </h3>
              <div className="form-control">
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">Vegetables,Fruits</span>
                </label>

                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">Cooking</span>
                </label>

                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">Fish</span>
                </label>

                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">Dairy</span>
                </label>
              </div>
            </div>
            <div className="border p-5 mt-5">
              <h3 className=" border-white border-l-black font-bold border-4 gap-3 px-3">
                Ratings
              </h3>

              <div className="form-control">
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">1 Star</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">2 Star</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">3 Star</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">4 Star</span>
                </label>
                <label className=" cursor-pointer flex  items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                  <span className="label-text">5 Star</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

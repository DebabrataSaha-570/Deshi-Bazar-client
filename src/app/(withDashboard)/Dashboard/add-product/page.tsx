"use client";
import { addProduct } from "@/app/services/actions/addProduct";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type FormInputs = {
  title: string;
  quantity: number;
  quantity_unit: string;
  categories: string;
  flash_sale: string;
  availability: string;
  price: number;
  first_image: string;
  second_image: string;
  third_image: string;
  fourth_image: string;
  description: string;
};

const DashboardAddProductPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      quantity_unit: "",
      categories: "",
      flash_sale: "",
      availability: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    reset();
  };
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setLoading(true);
      const result = await addProduct(data);
      if (result?.insertedId) {
        toast.success("Product Added Successfully");
        reset();
        setLoading(false);
      } else {
        setLoading(false);
        toast.error("Something went wrong!!");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Something went wrong!!");
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold">Add Product</h3>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" gap-5 mt-5 shadow-md px-5 py-5 rounded-md"
        >
          <div className="flex-0 md:flex gap-4">
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
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500">Product Name is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">Quantity</span>
              </div>
              <input
                type="number"
                placeholder="enter product quantity.."
                className="input input-bordered w-full "
                {...register("quantity", { required: true })}
              />
              {errors.quantity && (
                <span className="text-red-500">Quantity is required</span>
              )}
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Quantity Unit
                </span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("quantity_unit", { required: true })}
              >
                <option value="" disabled defaultValue="">
                  select unit
                </option>
                <option value="bundle">Bundle</option>
                <option value="kg">Kg</option>
                <option value="gm">gm</option>
                <option value="litre">Litre</option>
                <option value="Pcs">Pcs</option>
              </select>
              {errors.quantity_unit && (
                <span className="text-red-500">Quantity Unit is required</span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex gap-4 md:mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Previous Price
                </span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="enter previous price.."
                className="input input-bordered w-full "
              />
              {errors.quantity_unit && (
                <span className="text-red-500">Quantity Unit is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Current Price
                </span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="enter current price.."
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="text-red-500">Current Price is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">Categories</span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("categories", { required: true })}
              >
                <option value="" disabled>
                  Select Categories
                </option>
                <option value="vegetables_fruits">Vegetables and fruits</option>
                <option value="fish">Fish</option>
                <option value="cooking">Cooking</option>
                <option value="dairy">Dairy</option>
              </select>
              {errors.categories && (
                <span className="text-red-500">Categories is required</span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex gap-4 md:mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">Flash Sale</span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("flash_sale", { required: true })}
              >
                <option value="" disabled>
                  Select Flash
                </option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              {errors.flash_sale && (
                <span className="text-red-500">Flash Sale is required</span>
              )}
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Availability
                </span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("availability", { required: true })}
              >
                <option value="" disabled>
                  Select Availability
                </option>
                <option value="Available">Available</option>
                <option value="In Stock">In Stock</option>
              </select>
              {errors.availability && (
                <span className="text-red-500">Availability is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  First Image
                </span>
              </div>
              <input
                {...register("first_image", { required: true })}
                type="url"
                placeholder="enter image url .."
                className="input input-bordered w-full "
              />
              {errors.first_image && (
                <span className="text-red-500">First Image is required</span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Second Image
                </span>
              </div>
              <input
                {...register("second_image", { required: true })}
                type="url"
                placeholder="enter image url .."
                className="input input-bordered w-full "
              />
              {errors.second_image && (
                <span className="text-red-500">Second Image is required</span>
              )}
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Third Image
                </span>
              </div>
              <input
                {...register("third_image", { required: true })}
                type="url"
                placeholder="enter image url .."
                className="input input-bordered w-full "
              />
              {errors.third_image && (
                <span className="text-red-500">Third Image is required</span>
              )}
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-bold">
                  Forth Image
                </span>
              </div>
              <input
                {...register("fourth_image", { required: true })}
                type="url"
                placeholder="enter image url .."
                className="input input-bordered w-full "
              />
              {errors.fourth_image && (
                <span className="text-red-500">Fourth Image is required</span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex  gap-4"></div>
          <label className="form-control w-full  mt-2">
            <div className="label">
              <span className="label-text text-md font-bold">
                Product Description :
              </span>
            </div>
            <textarea
              {...register("description", { required: true })}
              rows={3}
              placeholder="enter product description.."
              className=" rounded-md p-2 textarea textarea-bordered textarea-md w-full"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">
                Product Description is required
              </span>
            )}
          </label>

          <div className="mt-2">
            <button onClick={handleCancel} type="button" className="btn mr-2">
              Cancel
            </button>
            {loading ? (
              <div className=" inline-block">
                <span className="loading loading-spinner loading-lg "></span>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary ">
                Add Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAddProductPage;

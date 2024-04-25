"use client";
import { TProduct } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DashboardProductsAction = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const handleProductDelete = (id: string) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (res) => {
      if (res.isConfirmed) {
        const res = await fetch(
          `https://deshi-bazar-server.vercel.app/api/v1/product/${id}`,
          {
            method: "DELETE",
          }
        );
        const result = await res.json();
        if (result) {
          router.refresh();
          return MySwal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <td className=" ">
      <>
        <button className="btn btn-sm btn-primary">
          <FaPenToSquare />
        </button>
        <button
          onClick={() => handleProductDelete(product._id)}
          className="btn btn-sm mt-2 md:mt-0 md:ml-2 btn-error"
        >
          <FaTrashAlt />
        </button>
      </>
    </td>
  );
};

export default DashboardProductsAction;

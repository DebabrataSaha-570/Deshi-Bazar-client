"use client";
import { TUser } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DashboardUsersActions = ({ user }: { user: TUser }) => {
  const router = useRouter();

  const deleteUser = async (id: string) => {
    const res = await fetch(
      `https://deshi-bazar-server.vercel.app/api/v1/user/${id}`,
      //   `http://localhost:5000/api/v1/user/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();
    console.log(result);
    if (result) {
      router.refresh();
    }
  };

  const updateUser = async (user: TUser) => {
    console.log(user);
  };
  return (
    <td>
      {user.role === "admin" ? (
        <button className="btn btn-sm  btn-secondary " disabled>
          Make Admin
        </button>
      ) : (
        <button
          onClick={() => updateUser(user)}
          className="btn btn-sm btn-primary"
        >
          Make Admin
        </button>
      )}
      <button
        onClick={() => deleteUser(user._id)}
        className="btn btn-sm ml-2 btn-error"
      >
        <FaTrashAlt />
      </button>
    </td>
  );
};

export default DashboardUsersActions;

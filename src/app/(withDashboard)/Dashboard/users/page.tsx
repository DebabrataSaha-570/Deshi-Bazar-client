import DashboardUsersActions from "@/components/Dashboard/DashboardUsersActions";
import { TUser } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardAllUsersPage = async () => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/users",
    {
      cache: "no-store",
    }
  );
  const users = await res.json();

  return (
    <div>
      <h3 className="text-3xl font-semibold">All Users</h3>

      <div className="overflow-x-auto">
        <table className="table my-5 rounded-md border ">
          <thead className="bg-secondary  text-base text-white ">
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: TUser, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin" && (
                    <span className="text-green-500">Admin</span>
                  )}
                  {user.role == "user" && (
                    <span className="text-gray-700">User</span>
                  )}
                </td>
                <DashboardUsersActions
                  user={user}
                  //   router={router}
                ></DashboardUsersActions>

                {/* <td>
                  <button className="btn btn-sm btn-primary">Make Admin</button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-sm ml-2 btn-error"
                  >
                    <FaTrashAlt />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllUsersPage;

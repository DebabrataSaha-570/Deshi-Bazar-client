"use server";

import { UserLoginData } from "@/app/login/page";

export const loginUser = async (registerData: UserLoginData) => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/login",
    {
      //   const res = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};

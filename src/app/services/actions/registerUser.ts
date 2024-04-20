"use server";

import { UserRegisterData } from "@/app/register/page";

export const registerUser = async (registerData: UserRegisterData) => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/register",
    {
      // const res = await fetch("http://localhost:5000/api/v1/register", {
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

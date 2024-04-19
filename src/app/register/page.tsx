"use client";
import Container from "@/components/ui/Container";
import React from "react";
import CommonLayout from "../(withCommonLayout)/layout";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type UserRegisterData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<UserRegisterData>();
  const onSubmit: SubmitHandler<UserRegisterData> = (data) => console.log(data);

  return (
    <CommonLayout>
      <Container className="px-10 my-20 flex justify-center items-center">
        <div className="card w-[28rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Sign up</h2>
            <p className="text-sm">
              Enter Your Details below to create your account and get started.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="enter name.."
                  className="input input-bordered w-full "
                />
                {errors.name && (
                  <span className="text-red-500 pt-1 px-2">
                    Name is required
                  </span>
                )}
              </label>
              <label className="form-control w-full mt-1">
                <div className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="enter email.."
                  className="input input-bordered w-full "
                />
                {errors.email && (
                  <span className="text-red-500 pt-1 px-2">
                    Email is required
                  </span>
                )}
              </label>
              <label className="form-control w-full mt-1">
                <div className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="enter password.."
                  className="input input-bordered w-full "
                />
                {errors.password && (
                  <span className="text-red-500 pt-1 px-2">
                    Password is required
                  </span>
                )}
              </label>

              <button type="submit" className="btn btn-primary w-full mt-5">
                Sign up
              </button>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </CommonLayout>
  );
};

export default RegisterPage;

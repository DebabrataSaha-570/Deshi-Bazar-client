"use client";
import Container from "@/components/ui/Container";
import React from "react";
import CommonLayout from "../(withCommonLayout)/layout";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "../services/actions/loginUser";
import { storeUserInfo } from "../services/auth.service";

export type UserLoginData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<UserLoginData>();
  const onSubmit: SubmitHandler<UserLoginData> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        storeUserInfo({ token: res?.token });
        toast.success(res?.message);
        router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      //   console.log(err.message);
      toast.error("Something went wrong!!");
    }
  };

  return (
    <CommonLayout>
      <Container className="px-10 my-20 flex justify-center items-center">
        <div className="card w-[28rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-2xl font-bold">Welcome back</h2>
              <p className="text-sm">
                Glad to see you again. Login to your account below.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full mt-2">
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
              <label className="form-control w-full mt-2">
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
                Login
              </button>

              <p className="text-center mt-3">
                Don&apos;t have an account ?{" "}
                <Link href="/register" className="text-primary font-bold">
                  Sign up for free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </CommonLayout>
  );
};

export default LoginPage;

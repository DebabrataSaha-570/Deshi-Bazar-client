import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <div
      className={`px-5 py-3 bg-white rounded-full font-semibold hover:bg-primary hover:text-white hover:cursor-pointer transition duration-700 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;

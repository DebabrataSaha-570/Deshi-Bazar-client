import React, { ReactNode } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const SecondaryButton = ({ children, className }: ButtonProps) => {
  return (
    <div className="">
      <div
        className={`pr-5 pl-7 py-3 bg-primary rounded-full text-white font-semibold flex justify-between items-center  cursor-pointer hover:bg-[--mediumGreen] transition duration-700  ${className}`}
      >
        {children}
        <span className="text-[23px] ">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};

export default SecondaryButton;

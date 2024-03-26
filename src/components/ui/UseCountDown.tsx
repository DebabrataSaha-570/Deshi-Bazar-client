"use client";
import { useEffect, useState } from "react";

const UseCountDown = ({
  InitialHours,
  InitialMinutes,
  InitialSeconds,
}: {
  InitialHours: number;
  InitialMinutes: number;
  InitialSeconds: number;
}) => {
  const [hours, setHours] = useState(InitialHours);
  const [minutes, setMinutes] = useState(InitialMinutes);
  const [seconds, setSeconds] = useState(InitialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);
  return (
    <span className=" font-mono text-xl">
      <span className=" bg-[#FF6801] px-4 py-2 rounded-sm text-white text-2xl ">
        {hours}
      </span>
      <span className="text-[#FF6801] mx-2">:</span>
      <span className="bg-[#FF6801] px-4 py-2 rounded-sm text-white text-2xl">
        {minutes}
      </span>
      <span className="text-[#FF6801] mx-2">:</span>
      <span className="bg-[#FF6801] px-4 py-2 rounded-sm text-white text-2xl">
        {seconds}
      </span>
    </span>
  );
};

export default UseCountDown;

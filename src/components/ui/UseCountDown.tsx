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
    <div className="flex gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {/* <span> {hours}</span> */}
          <span style={{ "--value": hours } as any}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          {/* <span> {minutes}</span> */}
          <span style={{ "--value": minutes } as any}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds } as any}></span>
          {/* <span> {seconds}</span> */}
        </span>
        sec
      </div>
    </div>
  );
};

export default UseCountDown;

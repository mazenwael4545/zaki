import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState(1 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  // Format time mm:ss
  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Countdown logic
  useEffect(() => {
    let interval;
    if (isActive && !loading) {
      interval = setInterval(() => {
        setTime((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, loading]);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsActive(true);
    }, 2000); // fake loading time
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-224px)]">
      <div className="bg-red-300 border-4 border-black rounded-3xl shadow-[6px_6px_0_0_#000] p-8 w-80 text-center">

        <h1 className="text-3xl font-bold mb-6 text-black">⏱ وقت التركيز</h1>

        {loading ? (
          <div className="flex justify-center items-center h-24">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="text-5xl font-bold mb-6 text-black">
            {formatTime(time)}
          </div>
        )}

        <div className="flex justify-center gap-4">
          {!isActive ? (
            <button
              onClick={handleStart}
              className="bg-green-400 font-bold border-4 border-black px-6 py-2 rounded-xl shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              بدء
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="bg-red-400 font-bold border-4 border-black px-6 py-2 rounded-xl shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              إعادة
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;

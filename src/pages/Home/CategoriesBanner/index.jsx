import { useState, useEffect } from "react";
import Banner from "../../../assets/CategoriesBanner/Banner.jpg";

const CategoriesBanner = ({title}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-10-01T00:00:00").getTime(); // Set Deadline

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Banner})`, maxHeight: "400px", maxWidth: "100%" }}
    >
      <div className="text-white text-center">
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
          {title || "Special Offer!"}
        </div>

        <div className="flex gap-6 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl md:text-3xl font-bold">
                {timeLeft.days}
              </span>
              <span className="text-xs md:text-sm">Days</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl md:text-3xl font-bold">
                {timeLeft.hours}
              </span>
              <span className="text-xs md:text-sm">Hours</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl md:text-3xl font-bold">
                {timeLeft.minutes}
              </span>
              <span className="text-xs md:text-sm">Minutes</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl md:text-3xl font-bold">
                {timeLeft.seconds}
              </span>
              <span className="text-xs md:text-sm">Seconds</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded mt-4">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBanner;

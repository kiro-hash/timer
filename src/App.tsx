import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-07-29T00:00:00");

function App() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.floor((TARGET_DATE.getTime() - Date.now()) / 1000)
      );

      setTimeLeft(remaining);
    };

    updateTimer(); 

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container">
      <h1>Time Remaining</h1>
      <h1>
        {days}d {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h1>
    </div>
  );
}

export default App;
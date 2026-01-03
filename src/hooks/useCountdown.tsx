import { useState, useEffect } from "react";

function calculateTimeRemaining(expirationDate: Date | null): string {
  if (!expirationDate) {
    return "00h 00m 00s";
  }

  const now = new Date();
  const diff = expirationDate.getTime() - now.getTime();

  if (diff <= 0) {
    return "00h 00m 00s";
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, "0")}h ${minutes
    .toString()
    .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
}

export function useCountdown(expirationDate: Date | null): string {
  const [timeRemaining, setTimeRemaining] = useState<string>(() =>
    calculateTimeRemaining(expirationDate)
  );

  useEffect(() => {
    if (!expirationDate) return;

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(expirationDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationDate]);

  return timeRemaining;
}

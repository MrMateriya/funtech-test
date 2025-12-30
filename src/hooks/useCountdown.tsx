import { useState, useEffect } from 'react';

export function useCountdown(expirationDate: Date | null): string {
  const [timeRemaining, setTimeRemaining] = useState<string>('00h 00m 00s');

  useEffect(() => {
    if (!expirationDate) {
      return;
    }

    const updateTimer = () => {
      const now = new Date();
      const diff = expirationDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeRemaining('00h 00m 00s');
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining(
        `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [expirationDate]);

  return timeRemaining;
}


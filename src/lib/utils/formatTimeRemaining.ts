export function formatTimeRemaining(expirationDate: Date): string {
  const now = new Date();
  const diff = expirationDate.getTime() - now.getTime();
  
  if (diff <= 0) {
    return "00h 00m 00s";
  }
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
}


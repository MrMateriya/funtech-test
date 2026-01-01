export function getRandomInt(max: number, seededRandom?: () => number): number {
  const random = seededRandom || Math.random;
  return Math.floor(random() * max);
}
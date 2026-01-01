export function getRandomDate(start: Date, end: Date, seededRandom?: () => number): Date {
  const random = seededRandom || Math.random;
  return new Date(start.valueOf() + random() * (end.valueOf() - start.valueOf()));
}
export function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.valueOf() + Math.random() * (end.valueOf() - start.valueOf()));
}
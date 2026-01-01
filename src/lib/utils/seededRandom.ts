export function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0;
  }
  
  let state = Math.abs(hash);
  
  return function() {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}


export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
  }
  
  export function getTotalScore(scores) {
    return scores.reduce((score, count) => score + count);
  }
  const a : number = "this is a string";
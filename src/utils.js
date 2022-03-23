export const getRandom = (from = 0, to = 100) => Math.round(Math.random() * to) + from;

export const getGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  for (let n = min; n > 1; n -= 1) {
    if (max % n === 0 && min % n === 0) {
      return n;
    }
  }

  return 1;
};

export default { getRandom, getGcd };

export const getRandom = (from = 0, to = 100) => Math.round(Math.random() * (to - from)) + from;

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

export const getProgression = (start = 0, length = 5, increment = 1) => {
  const progression = [];

  for (let i = 0, el = start; i < length; i += 1) {
    progression.push(el);
    el += increment;
  }

  return progression;
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default {
  getRandom, getGcd, getProgression, isPrime,
};

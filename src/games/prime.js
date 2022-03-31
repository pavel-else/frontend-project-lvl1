import readlineSync from 'readline-sync';
import { getRandom, isPrime } from '../utils.js';

export const game = {
  title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  gameFlow: () => {
    const num = getRandom(1, 100);

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    const expected = isPrime(num) ? 'yes' : 'no';

    return {
      result: expected === answer,
      answer,
      correctAnswer: expected,
    };
  },
};

export default { game };

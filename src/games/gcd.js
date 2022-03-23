import readlineSync from 'readline-sync';
import { getRandom, getGcd } from '../utils.js';
import Game from '../game.js';

export const game = new Game({
  title: 'Find the greatest common divisor of given numbers.',
  gameFlow: () => {
    const num1 = getRandom(1, 100);
    const num2 = getRandom(1, 100);

    console.log(`Question: ${num1} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    const expected = getGcd(num1, num2);

    const result = expected === Number(answer);

    return {
      result,
      answer,
      correctAnswer: expected,
    };
  },
});

export default { game };

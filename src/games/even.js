import readlineSync from 'readline-sync';
import { getRandom } from '../utils.js';
import Game from '../game.js';

export const game = new Game({
  title: 'Answer "yes" if the number is even, otherwise answer "no".',
  gameFlow: () => {
    const num = getRandom();

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    const isEvenNum = num % 2 === 0;

    const expected = isEvenNum ? 'yes' : 'no';

    return {
      result: expected === answer,
      answer,
      correctAnswer: expected,
    };
  },
});

export default { game };

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

    const result = (isEvenNum && answer === 'yes') || (!isEvenNum && answer === 'no');

    return {
      result,
      answer,
      correctAnswer: isEvenNum ? 'yes' : 'no',
    };
  },
});

export default { game };

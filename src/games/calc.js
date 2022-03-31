import readlineSync from 'readline-sync';
import { getRandom } from '../utils.js';

export const game = {
  title: 'What is the result of the expression?',
  gameFlow: () => {
    const num1 = getRandom(10, 100);
    const num2 = getRandom(1, 10);

    const options = {
      0: {
        question: `${num1} + ${num2}`,
        expected: num1 + num2,
      },
      1: {
        question: `${num1} - ${num2}`,
        expected: num1 - num2,
      },
      2: {
        question: `${num1} * ${num2}`,
        expected: num1 * num2,
      },
    };

    const { question, expected } = options[getRandom(0, 2)];

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    return {
      result: expected === Number(answer),
      answer,
      correctAnswer: expected,
    };
  },
};

export default { game };

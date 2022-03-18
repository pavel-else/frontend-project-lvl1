// @ts-check
import readlineSync from 'readline-sync';

/**
 * @returns {number}
 */
const getRandom = () => Math.round(Math.random() * 100);

/**
 * @returns {object}
 */
const ask = () => {
  const num = getRandom();
  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  const isEvenNum = num % 2 === 0;

  const result = (isEvenNum && answer === 'yes') || (!isEvenNum && answer === 'no');

  return {
    result,
    num,
    answer,
    correctAnswer: isEvenNum ? 'yes' : 'no',
  };
};

export const startGameEvent = ({ userName }) => {
  console.log('userName', userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswerCount = 0;

  while (rightAnswerCount !== 3) {
    const { result, answer, correctAnswer } = ask();

    if (result) {
      console.log('Correct!');

      rightAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default { startGameEvent };

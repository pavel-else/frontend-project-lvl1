import { askName } from './cli.js';

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = askName();

  console.log(game.title);

  let rightAnswerCount = 0;

  while (rightAnswerCount !== 3) {
    const { result, answer, correctAnswer } = game.gameFlow();

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

export default { runGame };

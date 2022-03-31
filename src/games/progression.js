import readlineSync from 'readline-sync';
import { getRandom, getProgression } from '../utils.js';

export const game = {
  title: 'What number is missing in the progression?',
  gameFlow: () => {
    const start = getRandom(0, 30);
    const increment = getRandom(-10, 10);
    const length = 5;
    const index = getRandom(0, length - 1);

    const progression = getProgression(start, length, increment);
    const progressionView = [...progression.slice(0, index), '..', ...progression.slice(index + 1, progression.length)];

    console.log(`Question: ${progressionView.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');
    const expected = progression[index];

    return {
      result: expected === Number(answer),
      answer,
      correctAnswer: expected,
    };
  },
};

export default { game };

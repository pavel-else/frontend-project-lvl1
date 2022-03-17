import readlineSync from 'readline-sync';

const a = 123;

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export default askName;

export default class {
  title = '';

  gameFlow = null;

  constructor({ title, gameFlow = () => ({}) }) {
    this.title = title;
    this.gameFlow = gameFlow;
  }

  run() {
    return this.gameFlow();
  }
}

#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { startGameEvent } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');

const name = askName();

startGameEvent({ userName: name });

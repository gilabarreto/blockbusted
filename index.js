#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgGreen('Hello World!'));

let playerName;

const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Are you a movie maniac? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`${chalk.bgBlue('HOW TO PLAY')}
  I am a proccess on your computer.
  If you get any question wrong I will be ${chalk.bgRed('Terminate you!')}
  So get all the questions right...

  `);

}

await welcome();

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

await askName();

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question1',
    type: 'list',
    message: `It's only after we've lost everything that we're free to do anything.`,
    choices: [
      'Fight Club',
      'Titanic',
      'Free Willy',
      'Goonies',
    ],
  });
  return answers.question_1 == 'Fight Club';
}
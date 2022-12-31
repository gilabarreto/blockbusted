#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import data from './quotes.js'

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
  If you get any question wrong I will ${chalk.bgRed('Terminate you!')}
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
  return handleAnswer(answers.question1 == 'Fight Club');
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `That's correct. Nice work ${playerName}.` })
  } else {
    spinner.error({ text: `Game over ${playerName}. Hasta la vista baby!` });
    process.exit(1);
  }
}

await question1();

function winner() {
  console.clear();
  const msg = `Congrats , ${playerName} !`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
    process.exit(0);
  });
}

await winner();
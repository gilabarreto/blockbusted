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

async function question() {

  const id = Math.floor(Math.random() * 101) + 1;
  const answers = await inquirer.prompt({
    name: 'question',
    type: 'list',
    message: data[id].quote,
    choices: [
      // data[id].movie,
      "answer",
      data[Math.floor(Math.random() * 101) + 1].movie,
      data[Math.floor(Math.random() * 101) + 1].movie,
      data[Math.floor(Math.random() * 101) + 1].movie,
    ].sort(() => Math.random() - 0.5),
  });
  return handleAnswer(answers.question == "answer");
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `That's correct. Nice work ${playerName}.` })
    console.log("")
    question()
  } else {
    spinner.error({ text: `Game over ${playerName}. Hasta la vista baby!` });
    process.exit(1);
  }
}

await question();

// function winner() {
//   console.clear();
//   const msg = `Congrats , ${playerName} !`;

//   figlet(msg, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//     process.exit(0);
//   });
// }

// await winner();
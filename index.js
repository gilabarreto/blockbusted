#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import data from './quotes.js'

let playerName;

const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

async function welcome() {

  figlet(`Blockbusted`, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });

  await sleep();

  console.log(`${chalk.bgBlue('HOW TO PLAY')}
  I am a former Blockbusted employee.
  If you get any question wrong I will ${chalk.bgRed('Terminate you!')}
  So get all the questions right...

  `);
}

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

async function questionQuote() {
  try {
    const id = Math.floor(Math.random() * 101) + 1;
    const answers = await inquirer.prompt({
      name: 'question',
      type: 'list',
      message: `Quote: \"${data[id].quote}\"`,
      choices: [
        data[id].movie,
        data[Math.floor(Math.random() * 101) + 1].movie,
        data[Math.floor(Math.random() * 101) + 1].movie,
        data[Math.floor(Math.random() * 101) + 1].movie,
      ].sort(() => Math.random() - 0.5),
    });
    return handleAnswer(answers.question == data[id].movie);
  } catch (err) {
    console.log(err)
  }
}

async function questionYear() {
  try {
    const id = Math.floor(Math.random() * 101) + 1;
    const answers = await inquirer.prompt({
      name: 'question',
      type: 'list',
      message: `Which year was ${data[id].movie} released?`,
      choices: [
        data[id].year,
        data[Math.floor(Math.random() * 101) + 1].year,
        data[Math.floor(Math.random() * 101) + 1].year,
        data[Math.floor(Math.random() * 101) + 1].year,
      ].sort(() => Math.random() - 0.5),
    });
    return handleAnswer(answers.question == data[id].year);
  } catch (err) {
    console.log(err)
  }
}

async function askQuestion() {

  const questions = [
    questionQuote,
    questionYear
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);

  const randomQuestion = questions[randomIndex];

  await randomQuestion();
}

let score = 0;

async function handleAnswer(isCorrect) {

  const spinner = createSpinner('Checking answer...').start();

  await sleep();

  if (isCorrect) {

    spinner.success({ text: `That's correct ${playerName}. You got ${++score} out of 100. \n` })

    if (score === 10) {

      await sleep();
      await winner();

    }

    await askQuestion()

  } else {
    spinner.error({ text: `Game over ${playerName}. Hasta la vista baby! \n` });

    await sleep();
    await loser();

    process.exit(1);
  }
}

async function winner() {
  console.clear();
  const msg = `Congrats , ${playerName} !`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
    process.exit(0);
  });
}

async function loser() {
  console.clear();
  const msg = `Game Over`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

await welcome();
await askName();
await askQuestion();
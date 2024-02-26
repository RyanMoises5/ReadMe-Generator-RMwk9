const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const title = {
  type: 'input',
  name: 'title',
  message: "Enter the title of your project.",
}
const description = {
  type: 'input',
  name: 'description',
  message: "Describe your project",
}
const install = {
  type: 'input',
  name: 'install',
  message: "Enter instructions to install your project",
}
const usage = {
  type: 'input',
  name: 'usage',
  message: "Enter directions of how to use your project",
}
const contributing = {
  type: 'input',
  name: 'contribute',
  message: "Enter contributing guidelines",
}
const tests = {
  type: 'input',
  name: 'tests',
  message: "Enter instructions to testing your project",
}
const userGitHub = {
  type: 'input',
  name: 'userGitHub',
  message: "What is your GitHub username?",
}
const userEmail = {
  type: 'input',
  name: 'userEmail',
  message: "What is your email?",
}
const license = {
  type: 'rawlist',
  name: 'license',
  message: "What license do you want for your project?",
  choices: [
    'No License',
    'Apache-2.0', 
    'GPL-3.0', 
    'MIT', 
    'BSD-2-Clause', 
    'BSD-3-Clause', 
    "BSL-1.0", 
    "CC0-1.0", 
    "EPL-2.0", 
    "AGPL-3.0",
    "GPL-2.0",
    "LGPL-2.1",
    "MPL-2.0",
    "Unilicense"
    ]
  }

const questions = [title, description, install, usage, contributing, tests, userGitHub, userEmail, license];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  const { title, description, install, usage, contribute, tests, userGitHub, userEmail } = response
  fs.writeFile(
    fileName,
    `README + ${title},${description}`,
    (err) => err ? console.log(err) : console.log('Success!')
    )
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      writeToFile("READMESample.md", response);
      generateMarkdown(response);
    })
}

// Function call to initialize app
init();

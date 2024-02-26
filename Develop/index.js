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
const contribute = {
  type: 'input',
  name: 'contribute',
  message: "Enter contribution guidelines",
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

const questions = [title, description, install, usage, contribute, tests, userGitHub, userEmail];

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
      writeToFile("README.md", response)
    })
}

// Function call to initialize app
init();

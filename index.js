// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is project title?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please enter a description about the project",
  },
  {
    type: "input",
    name: "Installation",
    message: "What command is use to install dependencies?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the application used for?",
  },
  {
    type: "input",
    name: "Contribution",
    message: "Does application accepts contribution?",
  },
  {
    type: "list",
    name: "license",
    message: "What is your project license",
    choices: ["MIT", "APACHE 2.0", "BSD 3.0", "None"],
  },
  
  {
    type: "input",
    name: "Tests",
    message: "What command should be use to run tests?",

  },
  {
    type: "input",
    name: "GitHub",
    message: "Add your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Add your e-mail address",
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown(answers))
  });
}

// Function call to initialize app
init();

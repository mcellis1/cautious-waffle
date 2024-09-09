// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'write the description for your README',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'whatt are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list your collaborators if any',
    },
    {
        type: 'input',
        name: 'license',
        message: 'select the license you would like to use',
        // choices: []
    },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const fileName = `${answers.title}.md`
    fs.writeFile(fileName, generateMarkdown(answers), (err) =>
        err ? console.logg(err) : console.log('successfully created README.md')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile)
        .catch((err) => console.error(err))
}

// Function call to initialize app
init();

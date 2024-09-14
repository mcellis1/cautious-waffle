// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import { generateMarkdown } from './utils/generateMarkdown.js'
import fs from 'fs'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'write the description for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list your collaborators if any'
    },
    {
        type: 'list',
        name: 'license',
        message: 'select the license you would like to use',
        choices: ['ISC', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'user',
        message: 'enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address'
    }
]

// TODO: Create a function to write README file
function writeToFile(answers) {
    const fileName = `${answers.title}-README.md`
    const license = `${answers.license}`
    fs.writeFile(fileName, generateMarkdown(answers, license), (err) =>
        err ? console.logg(err) : console.log('successfully created README file')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile)
        .catch((err) => console.error(err))
}

// Function call to initialize app
init()

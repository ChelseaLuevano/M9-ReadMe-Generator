// TODO: Include packages needed for this application - I installed inquirer version 8.2.4

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README1.md';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return "Please enter a title to continue." } },
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return "Please enter a project description to continue." }},
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return "Please enter installation instructions to continue." }},
    },
    {
        type: 'input',
        message: 'Please provide instructions for use.',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return "Please enter usage instructions to continue." }},
    },
    {
        type: "list",
        message: "What license do you choose for your project?",
        name: "license",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        message: 'Please list any collaborators on this project. Otherwise type "Not Applicable" or hit enter. ',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Please list how to use any tests you have written for this project. If no tests written, type "Not Applicable" or hit enter. ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username',
        validate: (value) => { if (value) { return true } else { return "Please enter a GitHub Username to continue." }},
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "Please enter an email address to continue." }},
    },
]


// TODO: Create a function to write README file
const writeToFile = function (data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file has been written!")
    });

}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const fileContent = generateMarkdown(answers);
            writeToFile(fileContent);
        })
        .catch(error => {
            console.log(error);
        });
}

// Function call to initialize app
init();

/// module.exports = questions;
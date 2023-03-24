// TODO: Include packages needed for this application - I installed inquirer version 8.2.4

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README1.md';

// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) =>{ if (value){return true} else {return "Please enter a title to continue."}},
        },
        // {
        //     type: 'input',
        //     message: 'What is your project description?',
        //     name: 'description',
        // },
        // {
        //     type: 'input',
        //     message: 'What are the steps required to install your project?',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Provide instructions for use.',
        //     name: 'usage',
        // },
        {
            type: 'input',
            message: 'Please share the license for this project?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please list any collaborators on this project. Otherwise type "Not Applicable" ',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Please list how to use any tests you have written for this project. If no tests written, type "Not Applicable" ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your github user name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ]) .then((data) =>{
        const fileContent = generateMarkdown(data);
        writeToFile(data);
       
      });


// TODO: Create a function to write README file
const writeToFile = function (data) {
fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => {
    if (err) {
        return console.log (err);
        }
        console.log("The file has been written!")  
    });

}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

module.exports = writeToFile;
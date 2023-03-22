// TODO: Include packages needed for this application - I installed inquirer version 8.2.4

const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are your installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How can someone use your project code?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How can someone use your project code?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please share the license link you want to use for this project?',
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
            name: 'email-address',
        },
    ]) .then((answer) =>{
        console.log(answer);
        // license 
      });

// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, 

// License -Type List of license options
// , Contributing, Tests, and 


// Questions - Github User Name with link to profile & Email address
// https://github.com/${username}

// TODO: Create a function to write README file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const writeToFile = function (fileName, data) {


}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

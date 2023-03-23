// I think I should write something to pass the license url..
const index = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}
// do i need to do a module export for each of these functions so I can call this in my write file function?

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  ## Description
  ${data.description}

  ## Table of Contents
  

  ## Installation
  ${data.installation}
  
  ## Usage

  ## License 

  ## Credits

  ##Questions
`;
}

module.exports = generateMarkdown;

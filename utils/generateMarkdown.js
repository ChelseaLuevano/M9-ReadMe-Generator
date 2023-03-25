// I think I should write something to pass the license url..
const index = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license}](https://img.shields.io/badge/license-${license}-blue.svg)(https://opensource.org/licences/${license})`;
  }
  return '';
}
// do i need to do a module export for each of these functions so I can call this in my write file function?

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License 
  ${data.license}

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.tests}


  ## Questions
  Github User Name: ${data.username}
  Github Profile: https://github.com/${data.username}

  If you have any questions about my Github Project, please send an email to ${data.email} .
`;

}

module.exports = generateMarkdown;

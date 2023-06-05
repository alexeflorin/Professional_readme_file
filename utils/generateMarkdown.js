// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="None") {
    return "";
    // return nothing if ther is no license
  } else {
    // license and license image
    return `![Github license](https://img.shields.oo/badges/license-${license}-orange.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.Description}

## Table of Contents

*[Installation](#Installation)
*[Usage](#Usage)
*[Credits](#Contribution)
*[License](#License)
*[Tests](#Tests)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Credits

${data.Contribution}

## License

${renderLicenseBadge(data.license)}

## Badges
 
## Features

## How to Contribute


## Tests

${data.Testing}


## Questions

For questions about this application you can send e-mail at ${data.email} 
or visti the GitHub repository code at: https://github.com/${data.GitHub}

`;
}

module.exports = generateMarkdown;

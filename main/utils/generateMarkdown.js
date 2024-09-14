import { getLicense } from 'license';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `(https://opensource.org/licenses/${license})`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return getLicense(license)
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data, license) {
  return `# ${data.title}
${renderLicenseBadge(license)}${renderLicenseLink(license)}
  
## Description

${data.description}

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#contributing)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.credits}

## License

${renderLicenseSection(license)}

## Questions

Questions about the prooject should be directed through the following contacts below.
Link to github profile: [${data.user}](https://github.com/${data.user})
Email: [${data.email}](mailto:${data.email})
`
}

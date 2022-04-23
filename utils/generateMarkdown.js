const fs = require('fs');

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "GNU_AGPLv3":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
      break;
    case "GNU_GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      break;
    case "GNU_LGPLv3":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
      break;
    case "Mozilla_Public_License_2":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
      break;
    case "Apache_License_2":
      //code block TODO: same issue 2.0
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "MIT_License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Boost_Software_License_1":
      //code block TODO: 1.0
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
      break;
    case "The_Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
    default:
      return "";
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "GNU_AGPLv3":
      return "(https://choosealicense.com/licenses/agpl-3.0/)";
      break;
    case "GNU_GPLv3":
      return "(https://choosealicense.com/licenses/gpl-3.0/)";
      break;
    case "GNU_LGPLv3":
      return "(https://choosealicense.com/licenses/lgpl-3.0)";
      break;
    case "Mozilla_Public_License_2":
      //code block TODO: needs to be Mozilla Public License 2.0 not sure how to fix
      return "(https://choosealicense.com/licenses/mpl-2.0/)";
      break;
    case "Apache_License_2":
      //code block TODO: same issue 2.0
      return "(https://choosealicense.com/licenses/apache-2.0/)";
      break;
    case "MIT_License":
      return "(https://choosealicense.com/licenses/mit/)";
      break;
    case "Boost_Software_License_1":
      //code block TODO: 1.0
      return "(https://choosealicense.com/licenses/bsl-1.0/)";
      break;
    case "The_Unlicense":
      //code block
      return "(https://choosealicense.com/licenses/unlicense/)";
      break;
    default:
      return "";
  }
}

// Returns the license section of README
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `${badge}${link}`
}

// Takes the data and creates a big string to send back to the main javascript class
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  let test = `# ${data.title}

## Description
${data.description}
  
## Table of Contents
 - [Description](#description)
 - [Installation Instruction](#installationInstruction)
 - [Usage Information](#usage-information)
 - [Contribution Guidelines](contribution-guidelines)
 - [Test Instructions](#test-instructions)
 - [License](#license)
  
## Installation Instruction
${data.installationInstruction}

## Usage Information
${data.usageInformation}
  
## Contribution Guidelines
${data.contributionGuidelines}
  
## Test Instructions
${data.testInstructions}

## License
${licenseSection}`;
  console.log(data.license);
  return(test); 
}

module.exports = {
  generateMarkdown
};
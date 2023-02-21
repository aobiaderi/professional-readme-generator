// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  if (data.license !== "None") {
    licenseBadge = `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  }
  
  return `# ${data.title}

  ${licenseBadge}
  
  
  ## Description
    ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}
  ## License
  ${data.license}
  ## Tests
  To test, run the following command: ${data.tests}
  ## Contributors
  ${data.contributer}


`;
}

module.exports = generateMarkdown;

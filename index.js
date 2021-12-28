// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of your project?'
    },
    // {
    //     type: 'input',
    //     name: 'installationinstruction',
    //     message: 'How do you install your program?'
    // },
    // {
    //     type: 'input',
    //     name: 'usage information',
    //     message: 'How do you use this program?'
    // },
    // {
    //     type: 'input',
    //     name: "contribution guidlines",
    //     message: 'What are the contribution guildlines for this project?'
    // },
    // {
    //     type: 'input',
    //     name: "test instructions",
    //     message: 'Test instructions'
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like this projec to have?',
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2', 'Apache_License_2', 'MIT_License', 'Boost_Software_License_1', 'The_Unlicense']
    }
    // }
];

let answers;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    Object.keys(data).forEach(key => {

        fs.appendFileSync(`testWrites/${fileName}`,
        `${key}    ${data[key]}
        
        `);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {

             writeToFile(`${response.title}.txt`, response);
        });
}

// Function call to initialize app
init();

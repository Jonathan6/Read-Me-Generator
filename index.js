const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'What is the file name for your Read Me?'
    },
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
    {
        type: 'input',
        name: 'installationInstruction',
        message: 'How do you install your program?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'How do you use this program?'
    },
    {
        type: 'input',
        name: "contributionGuidelines",
        message: 'What are the contribution guildlines for this project?'
    },
    {
        type: 'input',
        name: "testInstructions",
        message: 'Test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like this projec to have?',
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2', 'Apache_License_2', 'MIT_License', 'Boost_Software_License_1', 'The_Unlicense']
    }
];

// Write the data to a fileName
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
        }
    });
}

// Use inquirer to take in user data and sends it to the utils class
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const data = generateMarkdown(answers);
            writeToFile(`./readMes/${answers.fileName}.md`, data);  
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("error 1");
            } else {
                console.log("error 2");
            }
            console.log(error);
        });
}

// Function call to initialize app
// Starts the function
init();

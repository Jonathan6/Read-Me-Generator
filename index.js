// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
let questions = [
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of your project?'
    },
    {
        type: 'input',
        name: 'installation instruction',
        message: 'How do you install your program?'
    }
    // ,
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
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Hi everything is working so far");
    inquirer
        .prompt(questions).then((answers) => {
            console.log(JSON.stringify(answers, null, "   "))
        });
}

// Function call to initialize app
init();

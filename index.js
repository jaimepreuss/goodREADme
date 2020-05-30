const inquirer = require('inquirer');
const fs = reuiqre('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: '',
        name: 'badge',
        message: 'What kind of badge would you like to put on this repo?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is you email associated with your Github?'
    },
    {
        type: 'input',
        name: 'project URL',
        message: 'What is the URL to your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licence should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who is/has contributed to this project?'
    },
    {
        type: 'input',
        name: 'install command',
        message: 'What command should be run to install dependencies?',
        //npm i
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'run tests',
        message: 'What command should be run to do tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'need to know repo',
        message: 'What should the user know about using this repo?'
    },
    {
        type: 'input',
        name: 'need to know contribute',
        message: 'What should the user know to contribute to this repo?'
    }
]

function writeToFile(filename, data){
    return fs.writeToFile(path.join(process.cwd(),filename), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerRespopnses) => {
        writeToFile('README.md',generateMarkdown({...inquirerRespopnses}));
    })
}

init();
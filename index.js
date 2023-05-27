// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: (What was your motivation? (Why did you build this project?) (What problem does it solve?)(What did you learn?)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide the licence for your project.',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License (GPL)',
            'BSD 3-Clause License',
            'Creative Commons License',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'Other',
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
    {
        type: 'input',
        name: 'reach',
        message: 'Please provide instructions on how to reach you with additional questions.'
    },
    {
        type: 'input',
        name: 'questions',
        message: ''
    }
]



// TODO: Create a function to initialize app
function init() {
    
    inquirer
        .prompt(questions)
        .then((data) => { 

            fs.writeFile(`README.md`, generateMarkdown(data), (err) => {
                if (err) throw err
                console.log('Readme created')
            })
        })
}

// Function call to initialize app
init();
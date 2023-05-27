// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')

function getLicenseBadgeURL(license) {
    // Define the badge URLs for each license
    const licenseBadges = {
        'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
        'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        'GNU General Public License (GPL)': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
        'BSD 3-Clause License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        'Creative Commons License': 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg',
        'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
        'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    };
    return licenseBadges[license]
}

function generateTableOfContents() {
    const sections = [
        'Installation',
        'Usage',
        'Contributing',
        'License',
        'Questions'
    ];

    let tableOfContents = '## Table of Contents\n';

    sections.forEach((section) => {
        const sectionLink = section.toLowerCase().replace(/\s+/g, '-');
        tableOfContents += `- [${section}](#${sectionLink})\n`;
    });

    return tableOfContents;
}

// TODO: Create a function to initialize app
function init() {
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

    inquirer
        .prompt(questions)
        .then((data) => {
            const license = data.license
            // === 'Other' ? data.customLicense : data.license;
            const licenseBadgeURL = getLicenseBadgeURL(license)
            const tableOfContents = generateTableOfContents()
            const readMe = 
`# ${data.title}

![License Badge](${licenseBadgeURL})
        
## Description

${data.description}
        
${tableOfContents}

## Installation
        
${data.installation}
        
## Usage
        
${data.usage}
        
## Contributing
        
${data.contributing}
        
## License
        
This application is covered under the ${data.license}.
        
## Questions
        
${data.github}
${data.email}
${data.reach}

${data.questions}
`
            fs.writeFile(`README.md`, readMe, (err) => {
                if (err) throw err
                console.log('Readme created')
            })
        })
}

// Function call to initialize app
init();
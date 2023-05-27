// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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

function renderLicenseBadge(license) {
    const licenseBadges = {
        'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
        'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        'GNU General Public License (GPL)': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
        'BSD 3-Clause License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        'Creative Commons License': 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg',
        'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
        'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    };
    if (licenseBadges.hasOwnProperty(license)) {
        return licenseBadges[license]
    }
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLinks = {
        'MIT License': 'https://opensource.org/license/mit/',
        'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
        'GNU General Public License (GPL)': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
        'BSD 3-Clause License': 'https://opensource.org/license/bsd-3-clause/',
        'Creative Commons License': 'https://creativecommons.org/licenses/',
        'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
        'The Unlicense': 'https://unlicense.org/',
    }
    if (licenseLinks.hasOwnProperty(license)) {
        return licenseLinks[license]
    }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const license = data.license      
    const licenseBadgeURL = renderLicenseBadge(license)
    const licenceLink = renderLicenseLink(license)
    const tableOfContents = generateTableOfContents()
    const readMe = `
# ${data.title}

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
${licenceLink}
            
## Questions
            
'https://github.com/${data.github}'

${data.email}

${data.reach}`
    
  return readMe

}

module.exports = generateMarkdown
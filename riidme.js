//ReadMe Generator
//Project Title
//GitHub Username
//Email
//Description
//Table of Contents
//Installation
//Usage Instructions
//License
//Contributions

//Installed dependency => prompt-sync
const prompt =  require('prompt-sync')();
const fs =  require('fs');
const inquirer = require('inquirer');

//creating variables
let projectTitle = "";
let githubUsername = "";
let email  = "";
let description  =  "";
let tableOfContents  = "";
let installations  =  "";
let usageInstructions = "";
let license = "";
let contributions = "";

//Retrieving User Input

projectTitle =  prompt('Project Title: ');
githubUsername = prompt('GitHub Username: ');
email = prompt('Email: ');
description  = prompt('Description: ');
tableOfContents  = prompt('Table of Contents: ');
installations  = prompt('Installations:  ');
usageInstructions = prompt('Usage Instructions:  ');
license = prompt('License:  ');
contributions = prompt('Contributions:  ');

//Creating README String
readmeText = "# Project Title: \n"  +  projectTitle  +  "\n";
readmeText = readmeText + "## GitHub Username: \n"  +  githubUsername +  "\n";
readmeText = readmeText + "## Email: \n"  +  email +  "\n";
readmeText = readmeText + "## Description : \n"  +  description  +  "\n";
readmeText = readmeText + "## Table of Contents: \n"  +  tableOfContents +  "\n";
readmeText = readmeText + "## Installations : \n"  +  installations+  "\n";
readmeText = readmeText + "## Usage Instructions: \n"  + usageInstructions  +  "\n";
readmeText = readmeText + "## License: \n"  +  license +  "\n";
readmeText = readmeText + "## Contributions: \n"  +  contributions +  "\n";


//Writing to README file

fs.writeFile('README.md', readmeText, (err)  => {
    if (err) throw err; 
    console.log('readme saved!');
});




const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type : "input",
      name : "The title of my Project",
      message: "What is the Title of your project?.",  
    },
    {
        type : "input",
        name : "Description",
        message : "Describe your project.",
    },
    {
        type : "input",
        name : "Table of Contents",
        message : "List the contents of project",
    },
    {
        type : "input",
        name : "Usage",
        message : "Describe how to use app",
    },
    {
        type : "list",
        name : "License",
        message : "Choose one the option",
    },
    {
        type : "input",
        name : "Contributing",
        message : "List the contributor of project",
    },
    {
        type : "input",
        name : "Tests",
        message : "Test of your project",
    },
    {
        type : "input",
        name : "Questions",
        message : "Insert your email address, github profile and social media",
    },
    {
        type : "input",
        name : "Demo",
        message : "Insert your video, gif or screenshot of your running aplication",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Your README is sucessfull generated")
    })
}

const writeFileAsync = util.promisify(writeToFile);


// function to initialize program
function init() {
    try {
        const userResponses = await inquirer.createPromptModule(questions);
        console.log("Your responses:", userResponses);
        console.log("answer sudmitted");

        const userInfo = await api.getUser(userResponses);
        console.log()

        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    }
}

// function call to initialize program
init();

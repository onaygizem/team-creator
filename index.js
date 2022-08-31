// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require("inquirer");

// team array
const teamArray = [];

// Ask user for manager details
function managerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter the team managers name: ",
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter the team managers employee ID: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the team managers email address: ",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter the team managers office number: "
        }
    ]).then((managerAnswers) => {
        let { managerName, managerID, managerEmail, managerOfficeNumber } = managerAnswers;

        let manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);

        teamArray.push(manager);

        addEngineerOrIntern()
    })
}

// Ask user for engineer details
function engineerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineer's name: "
        },
        {
            type: "input",
            name: "engineerID",
            message: "Enter the engineer's ID: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email address: "
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the engineer's github username: "
        }
    ]).then((engineerAnswer) => {

        let employee;

        let { engineerName, engineerID, engineerEmail, engineerGithub } = engineerAnswer;

        employee = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);

        teamArray.push(employee);

        addEngineerOrIntern()
    })
}

// Ask user for intern details
function internPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name: "
        },
        {
            type: "input",
            name: "internID",
            message: "Enter the intern's ID: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email address: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the intern's school name: "
        }
    ]).then((internAnswer) => {

        let employee;

        let { internName, internID, internEmail, internSchool } = internAnswer;

        employee = new Intern(internName, internID, internEmail, internSchool);

        teamArray.push(employee);

        addEngineerOrIntern()
    })
}

// Ask user if they want to add another employee
function addEngineerOrIntern() {
    inquirer.prompt([
        {
            type: "list",
            name: "addMoreMembers",
            message: "Please select what other team member you want to create",
            choices: [
                "engineer",
                "intern",
                "none",
            ]
        }
    ])
        .then(function (addMoreMembersAnswer) {
            switch (addMoreMembersAnswer.addMoreMembers) {
                case "engineer":
                    engineerPrompt();
                    break;
                case "intern":
                    internPrompt();
                    break;
                default:
                    let pageHTML = generateHTML(teamArray)
                    writeFile(pageHTML);
            }
        })
}

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Successfully created! Please check out the index.html")
        }
    })
};

// Function to generate readme file
async function init() {
    managerPrompt()
}

init();
// require all classes
const employee = require('./lib/Employee.js')
const engineer = require('./lib/Engineer.js')
const intern = require('./lib/Intern.js')
const manager = require('./lib/Manager.js')
const team = require("./lib/team.html")
// require inquirer and fs
const inquire = require('inquirer')
const fs = require('fs')

const pageTemplate = require('./src/page-template.js')
const { default: inquirer } = require('inquirer')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')

let teamMembers = []

// Do I need this?
// let IDs = []


function init() {
    function addManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'officeNumber',
                }
            ])
            .then((answers) => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                teamMembers.push(manager)    
                teamAsk()  
                // IDs.push(manager.id)          
            })
        
        
    }

    function teamAsk() {
        inquirer 
            .prompt([
                {
                    type: 'list',
                    message: 'What type of employee would you like to create?', 
                    name: 'team',
                    choices: ['Intern', 'Engineer', 'Done']
                }

            ])
            .then((answers) => {
                switch(answers) {
                    case 'Intern':
                        addIntern()
                        break; 
                    case 'Engineer':
                        addEngineer()
                        break;
                    case 'Done':
                        buildTeam()
                }   
            })
    }

    

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What school do you attend?',
                    name: 'school',
                }
            ])
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamMembers.push(intern)
                teamAsk()
                // IDs.push(intern.id)
            })
                

    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id',

                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is your github?',
                    name: 'github',
                }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                teamMembers.push(engineer)
                teamAsk()
                // IDs.push(engineer.id)
            })
                
    }

    function buildTeam() {
        // Need to figure out syntax for the arguments for writeFileSync
        fs.writeFileSync("./dist/team.html", generateTeam(teamMembers), 'utf-8');
    }

    addManager()
}

init()
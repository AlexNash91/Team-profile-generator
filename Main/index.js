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

let team = []

// let teamID = []



function engineerData() {
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
        .then((response) =>
            team.push('engineer'))
}

function internData() {
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
        .then((response) =>
            team.push('engineer'))
        
}

function managerData() {
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
        .then((response) =>
            team.push('engineer'))
}

function teamData() {
}

engineerData()

internData()

managerData()

teamData()




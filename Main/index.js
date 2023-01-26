// require all classes
const employee = require('./lib/Employee.js')
const engineer = require('./lib/Engineer.js')
const intern = require('./lib/Intern.js')
const manager = require('./lib/Manager.js')
// require inquirer and fs
const inquire = require('inquirer')
const fs = require('fs')
 
const pageTemplate = require('./src/page-template.js')

let team = []

let teamID = []


const fs = require('fs');
const inquirer = require("inquirer");

const generateHTML = require("./src/generateHTML")

let employee = 'Manager'

const questions = [
  {
    type: 'input',
    name: 'name',
    message: `Enter the ${employee}\'s name:`
  },
  {
    type: 'input',
    name: 'id',
    message: `Enter the ${employee}\'s ID number:`
  },
  {
    type: 'input',
    name: 'email',
    message: `Enter the ${employee}\'s email:`
  }
  {
    type: 'input',
    name: 'officeNumber',
    message: `Enter the ${employee}\'s office number:`,
    when: (employee) => employee === 'Manager'
  }
]

inquirer.prompt(questions)
  .then((answers) => console.log(answers))

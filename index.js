// Importing dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Importing local dependencies
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Default employee is manager
let employee = 'Manager';

// Returns array of employees
const collectInputs = async (inputs = []) => {
  // Questions array using template literals
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: `Enter the ${employee}'s name:`,
      validate: name => {
        if(name) {
          return true;
        }
        return `The ${employee} must have a name.`
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `Enter the ${employee}'s ID number:`,
      validate: id => {
        if(id) {
          return true;
        }
        return `The ${employee} must have an ID.`
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `Enter the ${employee}'s email:`,
      validate: email => {
        const pass = (email.includes('@') && email.includes('.'))
        if(pass) {
          return true;
        }
        return `Please enter a valid email.`
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: `Enter the Manager's office number:`,
      when: employee === 'Manager',
      validate: officeNumber => {
        if(officeNumber) {
          return true;
        }
        return `The Manager must have an office number.`
      }
    },
    {
      type: 'input',
      name: 'github',
      message: `Enter the Engineer's GitHub username:`,
      when: employee === 'Engineer',
      validate: github => {
        if(github) {
          return true;
        }
        return `The Engineer must have a github.`
      }
    },
    {
      type: 'input',
      name: 'school',
      message: `Enter the Intern's school:`,
      when: employee === 'Intern',
      validate: school => {
        if(school) {
          return true;
        }
        return `The Intern must have a school.`
      }
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Do you need to add another team member?'
    },
    {
      type: 'list',
      name: 'nextEmployee',
      message: 'Choose next team member:',
      choices: ['Engineer', 'Intern'],
      default: 'Engineer',
      when: (answers) => answers.again === true
    }
  ]
  // again and the other answers are deconstructed from each round of questions
  const { again, ...answers } = await inquirer.prompt(questions)
  // Answers are passed in to addEmployee which is stored in to an array of other employees
  const newInputs = [...inputs, addEmployee(answers)];
  // Next employee is changed based on user choice
  employee = answers.nextEmployee;
  // Checks to see if a new employee is needed, 
  // If yes, function is run again
  // If not, returns array of employees
  return again ? collectInputs(newInputs) : newInputs;
}

// Returns an employee
const addEmployee = (answers) => {
  switch (employee){
  case 'Manager': return new Manager(answers);
  case 'Engineer': return new Engineer(answers);
  case 'Intern': return new Intern(answers);
  }
}

// Generates HTML file based on array of employees
const writeToFile = (employees) => {
  const markdownStr = generateHTML(employees)
  fs.writeFile('./dist/index.html', markdownStr, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html'))
}

// Gets an array of Employee objects and passes them to writeToFile
const init = async () => {
  const employees = await collectInputs();
  writeToFile(employees)
}

init();
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Default employee is manager
let employee = 'Manager';

const collectInputs = async (inputs = []) => {
  // Questions array
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
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: `Enter the Manager's office number:`,
      when: employee === 'Manager'
    },
    {
      type: 'input',
      name: 'github',
      message: `Enter the Engineer\'s GitHub username:`,
      when: employee === 'Engineer'
    },
    {
      type: 'input',
      name: 'school',
      message: `Enter the Intern\'s school:`,
      when: employee === 'Intern'
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
  const { again, ...answers } = await inquirer.prompt(questions)
  const newInputs = [...inputs, addEmployee(answers)];
  employee = answers.nextEmployee;
  return again ? collectInputs(newInputs) : newInputs;
}

// Returns an employee to be added to the array
const addEmployee = (answers) => {
  switch (employee){
  case 'Manager': return new Manager(answers);
  case 'Engineer': return new Engineer(answers);
  case 'Intern': return new Intern(answers);
  }
}

// 
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
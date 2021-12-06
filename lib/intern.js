const Employee = require('./employee.js');

class Intern extends Employee {
  constructor(data) {
    // Class is extended and data object has an additional property
    super(data);
    this.school = data.school;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return 'Intern';
  }
}

module.exports = Intern;
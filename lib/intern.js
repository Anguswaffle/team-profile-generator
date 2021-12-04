const Employee = require('./employee.js');

class Intern extends Employee {
  constructor(data) {
    super(data);
    this.school = data.school;
  }

  getSchool(){
    return this.school;
  }

  static getRole(){
    return 'Intern';
  }
}

module.exports = Intern;
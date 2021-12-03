const Employee = require('./employee');

class Manager extends Employee {
  constructor(data) {
    super(data);
    this.officeNumber = data.officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  
  static getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
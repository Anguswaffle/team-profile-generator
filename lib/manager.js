const Employee = require('./employee');

class Manager extends Employee {
  constructor(data) {
    // Class is extended and data object has an additional property
    super(data);
    this.officeNumber = data.officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
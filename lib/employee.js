
class Employee {
  // Takes in a data object with three properties
  constructor(data){
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
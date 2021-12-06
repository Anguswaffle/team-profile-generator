const Employee = require('./employee')

class Engineer extends Employee {
  constructor(data){
    // Class is extended and data object has an additional property
    super(data);
    this.github = data.github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
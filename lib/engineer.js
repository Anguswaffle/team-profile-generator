const Employee = require('./employee')

class Engineer extends Employee {
  constructor(data){
    super(data);
    this.github = data.github;
  }

  getGithub() {
    return `https://github.com/${this.github}/`;
  }

  static getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
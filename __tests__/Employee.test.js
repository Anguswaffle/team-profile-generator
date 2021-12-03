const Employee = require('../lib/employee.js');

describe('Employee Class', () => {
  it('should instantiate an employee class with three properties', () => {

    const info = { name: 'Aidan', id: '123', email: 'test@email.com'}
    const aidan = new Employee(info)

    expect(Object.getOwnPropertyNames(aidan).length).toBe(3)
    });
  
  describe('#getName', () => {
    it('should return name of employee', () => {
      const info = { name: 'Sam', id: '567', email: 'none@email.com'}
      const sammy = new Employee(info)
  
      expect(sammy.getName()).toBe(info.name)
    });
  });
  
  describe('#getId', () => {
    it('should return Employee\'s email', () => {
      const info = { name: 'Sam', id: '567', email: 'none@email.com'}
      const travis = new Employee(info)

      expect(travis.getId()).toBe(info.id)
    });
  });

  describe('#getEmail', () => {
    it('should return Employee email', () => {
      const info = { name: 'Sam', id: '567', email: 'none@email.com'};
      const travis = new Employee(info);

      expect(travis.getEmail()).toBe(info.email);
    });
  });

  describe('#getRole', () => {
    it('should return Employee\'s role', () => {
      const info = { name: 'Sam', id: '567', email: 'none@email.com'};

      expect(new Employee(info).getRole()).toBe('Employee')
    });
    
  });
});

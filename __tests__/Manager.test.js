const Manager = require('../lib/manager.js')

describe('Manager Class', () => {
  it('should instantiate a Manager class with four properties, extended from Employee class with an added officeNumber property', () => {

    const info = { name: 'Eliza', id: '123', email: 'dog@email.com', officeNumber: '4' };
    const liza = new Manager(info);

    expect(Object.getOwnPropertyNames(liza).length).toBe(4)
    expect(liza.officeNumber).toBe(info.officeNumber)
  });

  describe('#getOfficeNumber', () => {
    it('should return the Manager\'s office number', () => {

      const info = { name: 'Eliza', id: '123', email: 'dog@email.com', officeNumber: '15' };
      const liza = new Manager(info);

      expect(liza.getOfficeNumber()).toBe(info.officeNumber)
    });
  });

  describe('#getRole', () => {
    it('should return Manager\'s role', () => {

      const info = { name: 'Eliza', id: '123', email: 'dog@email.com', officeNumber: '4'};
    const liza = new Manager(info);

    expect(liza.getRole()).toBe('Manager')
      
    });
    
  });


});
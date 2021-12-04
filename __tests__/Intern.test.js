const Intern = require('../lib/intern.js')

describe('Intern Class', () => {
  it('should instantiate a Intern class with four properties, extended from Employee class with an added school property', () => {

    const info = { name: 'Eliza', id: '123', email: 'dog@email.com', school:'Obedience School' };
    const liza = new Intern(info);

    expect(Object.getOwnPropertyNames(liza).length).toBe(4)
    expect(liza.school).toBe(info.school)
  });

  describe('#getschool', () => {
    it('should return the Intern\'s school url', () => {

      const info = { name: 'Sam', id: '123', email: 'dog@email.com', school: 'Northwestern' };
      const sammy = new Intern(info);

      expect(sammy.getSchool()).toBe(info.school)
    });
  });

  describe('#getRole', () => {
    it('should return Intern\'s role', () => {

      const info = { name: 'Josshy', id: '781238', email: 'vegan@vegan.com', school: 'Northwestern' };
    const josshy = new Intern(info);

    expect(josshy.getRole()).toBe('Intern')
      
    });
  });
});
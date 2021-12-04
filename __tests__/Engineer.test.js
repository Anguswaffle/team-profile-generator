const Engineer = require('../lib/engineer.js')

describe('Engineer Class', () => {
  it('should instantiate a Engineer class with four properties, extended from Employee class with an added github property', () => {

    const info = { name: 'Eliza', id: '123', email: 'dog@email.com', github: 'ElizaDog' };
    const liza = new Engineer(info);

    expect(Object.getOwnPropertyNames(liza).length).toBe(4)
    expect(liza.github).toBe(info.github)
  });

  describe('#getGithub', () => {
    it('should return the Engineer\'s github url', () => {

      const info = { name: 'Eliza', id: '123', email: 'dog@email.com', github: 'testThis' };
      const liza = new Engineer(info);

      expect(liza.getGithub()).toBe(`https://github.com/${info.github}/`)
    });
  });

  describe('#getRole', () => {
    it('should return Engineer\'s role', () => {

      const info = { name: 'Josshy', id: '781238', email: 'vegan@vegan.com', github: 'josshyGit' };
    const josshy = new Engineer(info);

    expect(josshy.getRole()).toBe('Engineer')
      
    });
    
  });


});
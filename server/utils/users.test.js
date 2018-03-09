var expect = require('expect');
var {Users} = require('./users.js');

describe('Users',()=>{
    var users;
    beforeEach(()=>{
         users=new Users();
        users.users=[{
            id:'1',
            name:'fev',
            room:'hello'
        },{
            id:'2',
            name:'bro',
            room:'hello'
        }];
    });
    it('should add users',()=>{
        var users = new Users();
        var user ={
            id:'3',
            name:'dani',
            room:'elec'
        }
        var res = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([res]);
    });
    it('should get users list', ()=>{
          var res = users.getUsersList('hello');
          expect(res).toEqual(['fev','bro']);
    });
    it('should remove user',()=>{
        var uid='1';
        var res = users.removeUser(uid);

        expect(res.id).toBe(uid);
        expect(users.users.length).toBe(1);
         
    });
    it('should not remove user',()=>{
        var res = users.removeUser('9');

        expect(res).toBe(undefined);
        expect(users.users.length).toBe(2);
    });
    it('should find user',()=>{
        var uid='2';
        var res = users.getUser(uid);
        expect(res.id).toBe(uid);
    });
    it('should not find user',()=>{
        var res = users.getUser('9');
        expect(res).toBe(undefined);
    });
});
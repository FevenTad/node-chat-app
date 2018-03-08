var expect = require('expect');
var {generator} = require('./message');

describe('generatormsg',()=>{
    it('should generate correct object',()=>{
        var res = generator('amy', 'jo');
        expect({from:res.from,text:res.text}).toEqual({from:'amy',text:'jo'});
        // expect(res.createdAt).toBeA('number');
    });
});


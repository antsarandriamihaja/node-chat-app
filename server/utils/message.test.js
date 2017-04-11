var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage', ()=>{
it('should generate the correct message object', () => {
    var text = 'I want to take a nap';
    var from = 'Antsa'
    var res = generateMessage(from ,text )
    expect(res).toInclude({text, from})
})
})
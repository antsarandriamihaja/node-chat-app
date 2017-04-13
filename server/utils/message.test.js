var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', ()=>{
it('should generate the correct message object', () => {
    var text = 'I want to take a nap';
    var from = 'Antsa'
    var res = generateMessage(from ,text )
    expect(res).toInclude({text, from})
})
})
describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=> {
        var from = 'user';
        var latitude = 1;
        var longitude = 1;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        console.log(locationMessage);
        expect(locationMessage).toInclude({from,url})

    })
})
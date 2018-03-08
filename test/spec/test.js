it('should greet the named user', async function() {
    debugger;
    await browser.get('http://www.angularjs.org');

    await element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(await greeting.getText()).toEqual('Hello Julie!');
});
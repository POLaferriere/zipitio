var testing_1 = require('@angular/core/testing');
// Load the implementations that should be tested
var index_1 = require('./index');
// Use the assert helper to get a reference to the component, element and fixture
var assert_1 = require('./../../../assert');
testing_1.describe('Home', function () {
    // Provide our implementations or mocks to the dependency injector
    var providers = [];
    // Set up the helper 
    var assert = new assert_1.Assert(index_1.Home, providers);
    assert.it('should log ngOnInit', function (component, element, fixture) {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        component.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('Hello Home');
    });
});
//# sourceMappingURL=spec.js.map
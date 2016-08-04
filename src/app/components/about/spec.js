var testing_1 = require('@angular/core/testing');
// Load the implementations that should be tested
var index_async_1 = require('./index.async');
var ng_react_1 = require('./components/ng-react');
testing_1.describe('About', function () {
    beforeAll(function () {
        spyOn(ng_react_1.NGReact, 'initialize');
    });
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        index_async_1.About
    ]; });
    testing_1.it('should log ngOnInit', testing_1.inject([index_async_1.About], function (about) {
        about.ngOnInit();
        expect(ng_react_1.NGReact.initialize).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=spec.js.map
var testing_1 = require('@angular/core/testing');
var index_1 = require('./index');
testing_1.describe('Api Service', function () {
    testing_1.beforeEachProviders(function () { return [index_1.Api]; });
    testing_1.it('should ...', testing_1.inject([index_1.Api], function (api) {
        testing_1.expect(api.title).toBe('Angular 2');
    }));
});
//# sourceMappingURL=spec.js.map
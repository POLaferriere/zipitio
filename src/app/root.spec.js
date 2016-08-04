require('ts-helpers');
var testing_1 = require('@angular/core/testing');
// to use Translate Service, we need Http, and to test Http we need to mock the backend
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var core_1 = require("@angular/core");
// Load the implementations that should be tested
var index_1 = require('./services/api/index');
var index_2 = require('./index');
testing_1.describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        index_2.App,
        index_1.Api,
        http_1.BaseRequestOptions,
        testing_2.MockBackend,
        // Provide a mocked (fake) backend for Http
        core_1.provide(http_1.Http, {
            useFactory: function useFactory(backend, defaultOptions) {
                return new http_1.Http(backend, defaultOptions);
            },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
        })
    ]; });
    testing_1.it('should have an url', testing_1.inject([index_2.App], function (app) {
        expect(app.url).toEqual('//github.com/cmelion/generator-ng2-webpack');
    }));
    testing_1.describe('pipes', function () { });
    testing_1.describe('services', function () {
        require('./services/api/spec');
    });
    testing_1.describe('subcomponents', function () {
        require('./components/home/spec');
        require('./components/about/spec');
    });
});
//# sourceMappingURL=root.spec.js.map
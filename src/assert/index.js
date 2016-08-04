var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
/* Assert helper
 * Abstracts angular unit test boilerplate code
*/
/* istanbul ignore next */
var Assert = (function () {
    function Assert(type, overrideProviders) {
        if (overrideProviders === void 0) { overrideProviders = []; }
        this.type = type;
        this.overrideProviders = overrideProviders;
    }
    Assert.prototype.it = function (name, fn) {
        var _this = this;
        return testing_1.it(name, testing_1.inject([testing_2.TestComponentBuilder], function (testComponentBuilder) {
            return testComponentBuilder
                .overrideProviders(_this.type, _this.overrideProviders)
                .createAsync(_this.type).then(function (fixture) {
                fn(fixture.debugElement.componentInstance, fixture.debugElement.nativeElement, fixture);
            });
        }));
    };
    Assert.prototype.itAsync = function (name, fn) {
        var _this = this;
        var doneCallback = null;
        var injectFn = testing_1.inject([testing_2.TestComponentBuilder], function (testComponentBuilder) {
            return testComponentBuilder
                .overrideProviders(_this.type, _this.overrideProviders)
                .createAsync(_this.type).then(function (fixture) {
                fn(doneCallback, fixture.debugElement.componentInstance, fixture.debugElement.nativeElement, fixture);
            });
        });
        return testing_1.it(name, function (done) {
            injectFn();
            doneCallback = done;
        });
    };
    return Assert;
})();
exports.Assert = Assert;
//# sourceMappingURL=index.js.map
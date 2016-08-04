/// src/app/index.ts
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
require('../style/app.scss');
var api_1 = require('./services/api'); // ./services/api/index.ts
var routes_1 = require('./routes');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(api) {
        this.api = api;
        this.url = '//github.com/cmelion/generator-ng2-webpack';
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.concat([api_1.Api]),
            directives: router_deprecated_1.ROUTER_DIRECTIVES.slice(),
            pipes: [],
            styles: [require('./style.scss')],
            template: require('./template.html')
        }),
        router_deprecated_1.RouteConfig(routes_1.default), 
        __metadata('design:paramtypes', [api_1.Api])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=index.js.map
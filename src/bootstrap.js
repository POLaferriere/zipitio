/// <reference path="../typings/main.d.ts"/>
require('ts-helpers');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
else {
    ENV_PROVIDERS.push(platform_browser_1.ELEMENT_PROBE_PROVIDERS);
}
/*
 * App Component
 * our top level component that holds all of our components
 */
var index_1 = require('./app/index');
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
    return platform_browser_dynamic_1.bootstrap(index_1.App, http_1.HTTP_PROVIDERS.concat(router_deprecated_1.ROUTER_PROVIDERS, ENV_PROVIDERS))
        .catch(function (err) { return console.error(err); });
});
// activate hot module reload
if (module.hot) {
    // bootstrap must not be called after DOMContentLoaded,
    // otherwise it cannot be rerenderd after module replacement
    //
    // for testing try to comment the bootstrap function,
    // open the dev tools and you'll see the reloader is replacing the module but cannot rerender it
    platform_browser_dynamic_1.bootstrap(index_1.App, ENV_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS))
        .catch(function (err) { return console.error(err); });
    module.hot.accept();
}
//# sourceMappingURL=bootstrap.js.map
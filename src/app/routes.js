// src/app/routes.ts
var home_1 = require('./components/home'); // ./components/home/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    { path: '/', component: home_1.Home, name: 'Home' },
    // Async load a component using Webpack's require with es6-promise-loader
    { path: '/about', loader: function () { return require('./components/about')('About'); }, name: 'About' }
];
//# sourceMappingURL=routes.js.map
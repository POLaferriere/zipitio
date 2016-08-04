var core_1 = require('@angular/core');
var ng_react_1 = require('./components/ng-react');
var About = (function () {
    function About() {
        // Do stuff
    }
    About.prototype.ngOnInit = function () {
        ng_react_1.NGReact.initialize('Hello From React!');
    };
    About = __decorate([
        core_1.Component({
            selector: 'about',
            template: require('./template.html'),
            styles: [require('./style.scss')],
            providers: [],
            directives: [],
            pipes: []
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
exports.About = About;
//# sourceMappingURL=index.async.js.map
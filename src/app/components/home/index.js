var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var Home = (function () {
    function Home() {
        // Do stuff
    }
    Home.prototype.ngOnInit = function () {
        console.log('Hello Home');
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            directives: common_1.FORM_DIRECTIVES.slice(),
            pipes: [],
            styles: [require('./style.scss')],
            template: require('./template.html')
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=index.js.map
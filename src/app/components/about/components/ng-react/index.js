/// <reference path="../../../../../../typings/tsd.d.ts" />
var React = require('react');
var ReactDOM = require('react-dom');
// No type definition available quick and dirty require instead
var NotificationSystem = require('react-notification-system');
var NGReactProps = (function () {
    function NGReactProps() {
    }
    return NGReactProps;
})();
var NGReactComponent = (function (_super) {
    __extends(NGReactComponent, _super);
    function NGReactComponent(props) {
        _super.call(this, props);
        this._notificationSystem = null;
    }
    NGReactComponent.prototype.componentDidMount = function () {
        this._notificationSystem = this.refs.notificationSystem;
    };
    NGReactComponent.prototype._addNotification = function () {
        this._notificationSystem.addNotification({
            message: this.props.message,
            level: 'success'
        });
    };
    NGReactComponent.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("p", null, "Say Hello From React!"), React.createElement("p", null, React.createElement("button", {"onClick": this._addNotification.bind(this)}, "Hello")), React.createElement(NotificationSystem, {"ref": "notificationSystem"})));
    };
    return NGReactComponent;
})(React.Component);
var NGReact = (function () {
    function NGReact() {
    }
    NGReact.initialize = function (message) {
        ReactDOM.render(React.createElement(NGReactComponent, {"message": message}), document.getElementById('ng-react-component'));
    };
    return NGReact;
})();
exports.NGReact = NGReact;
//# sourceMappingURL=index.js.map
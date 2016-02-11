"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var AppManager = (function () {
    function AppManager(router) {
        this.myRouter = router;
    }
    AppManager.prototype.ngAfterViewInit = function () {
    };
    AppManager.prototype.goToApp1 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App1']); }, 500);
    };
    AppManager.prototype.goToApp2 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App2']); }, 500);
    };
    AppManager.prototype.goToApp3 = function () {
        var _this = this;
        setTimeout(function (e) { return _this.myRouter.navigate(['/App3']); }, 500);
    };
    AppManager = __decorate([
        core_1.Component({
            providers: [AppManager],
            selector: 'AppManager',
            template: "\n    <div id=\"appEntry\">\n        <small>I am AppManager component</small>\n        <div id=\"appSelector\" class=\"noScroll container\" >\n            <div align=\"center\" style=\"padding-top: 100px\">\n                <button (click)=\"goToApp1(event)\" data-ripple-color=\"black\" type=\"button\" name=\"mailWasp\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px; font-size: 5em\" class=\"fa fa-paper-plane\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 1</small>\n                 </button>\n                <button (click)=\"goToApp2(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-rocket\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 2</small>\n                </button>\n\n                <button (click)=\"goToApp3(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-film\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 3</small>\n                </button>\n\n            </div>\n        </div>\n        <div id=\"appMailWaspContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n        <div id=\"appEverNodesContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n    </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_2.Router])
    ], AppManager);
    return AppManager;
}());
exports.AppManager = AppManager;
//# sourceMappingURL=AppManager.js.map
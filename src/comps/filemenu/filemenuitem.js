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
var Filemenu_1 = require("./Filemenu");
var FilemenuItem = (function () {
    function FilemenuItem(fileMenu) {
        this.m_fileMenu = fileMenu;
        this.m_fileMenu.addFileMenuItem(this);
    }
    FilemenuItem.prototype.ngAfterViewInit = function () {
    };
    FilemenuItem = __decorate([
        core_1.Component({
            selector: 'FilemenuItem',
            inputs: ['title:title', 'app:app'],
            template: ""
        }), 
        __metadata('design:paramtypes', [Filemenu_1.Filemenu])
    ], FilemenuItem);
    return FilemenuItem;
}());
exports.FilemenuItem = FilemenuItem;
//# sourceMappingURL=FilemenuItem.js.map
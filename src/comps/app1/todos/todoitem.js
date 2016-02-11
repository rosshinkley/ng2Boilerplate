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
var TodoService_1 = require('./TodoService');
var TodoItem = (function () {
    function TodoItem() {
        this.editMode = false;
        this.done = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
    }
    TodoItem.prototype.doneClicked = function () {
        this.done.next(this.item);
    };
    TodoItem.prototype.editClicked = function () {
        this.editMode = !this.editMode;
        if (this.editMode)
            return;
        this.edit.next(this.item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TodoService_1.TodoItemModel)
    ], TodoItem.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItem.prototype, "done", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItem.prototype, "edit", void 0);
    TodoItem = __decorate([
        core_1.Component({
            selector: 'todo-item',
            template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{item.getKey('task')}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                </div>\n    ",
            styleUrls: ['../comps/app1/todos/Todoitem.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=Todoitem.js.map
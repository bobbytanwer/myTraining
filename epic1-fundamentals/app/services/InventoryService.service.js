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
var core_1 = require("@angular/core");
/**
 * Created by btanwer on 3/15/2017.
 */
var InventoryService = (function () {
    function InventoryService() {
    }
    InventoryService.prototype.getItems = function () {
        /* items is of Type of IInventoryItems as array and then initialize
        * it to an empty array or now to a list of items array defined in line*/
        var items = [{
                guid: 'item1',
                name: 'Scuba Watch',
                price: 151.99
            }, {
                guid: 'item2',
                name: 'light saber',
                price: 1000
            }, {
                guid: 'item3',
                name: 'r2d2',
                price: 2000
            }];
        return items;
    };
    InventoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;
//# sourceMappingURL=InventoryService.service.js.map
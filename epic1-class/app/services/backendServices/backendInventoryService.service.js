/**
 * Created by fzemen on 3/14/17.
 */
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
var BackendInventoryService = (function () {
    function BackendInventoryService() {
    }
    BackendInventoryService.prototype.getItems = function () {
        var items = [{
                guid: 'item1',
                name: 'Bronze Earings',
                price: 100.00
            }, {
                guid: 'item49',
                name: 'Kardassian Broach',
                price: 55.00
            }, {
                guid: 'item74',
                name: 'Diamon Necklace #54',
                price: 99.99
            }];
        return items;
    };
    BackendInventoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BackendInventoryService);
    return BackendInventoryService;
}());
exports.BackendInventoryService = BackendInventoryService;
//# sourceMappingURL=backendInventoryService.service.js.map
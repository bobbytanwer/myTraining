/**
 * Created by btanwer on 3/21/2017.
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
var core_1 = require('@angular/core');
var InventoryService_service_1 = require("../../services/InventoryService.service");
var InventoryList = (function () {
    function InventoryList(inventoryService) {
        this.inventoryService = inventoryService;
        this.context = 'Jewelry Rack';
    }
    InventoryList.prototype.getItems = function () {
        return this.inventoryService.getItems();
    };
    InventoryList = __decorate([
        core_1.Component({
            selector: 'inventory-list',
            templateUrl: 'InventoryList.component.html'
        }), 
        __metadata('design:paramtypes', [InventoryService_service_1.InventoryService])
    ], InventoryList);
    return InventoryList;
}());
exports.InventoryList = InventoryList;
//# sourceMappingURL=InventoryList.component.js.map

/**
 * Created by btanwer on 3/21/2017.
 */

import { Component } from '@angular/core';
import {InventoryService} from "../../services/InventoryService.service";
import  { IInventoryItem } from "../../shapes/IInventoryItem"
@Component({
    selector:'inventory-list',
    templateUrl:'InventoryList.component.html'
})

export class InventoryList{

    context:string = 'Jewelry Rack';

    constructor( private inventoryService:InventoryService){
      }

    getItems():IInventoryItem[]{
        return this.inventoryService.getItems();
    }
}

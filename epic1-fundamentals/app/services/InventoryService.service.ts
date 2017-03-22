import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";
/**
 * Created by btanwer on 3/15/2017.
 */

@Injectable()
class InventoryService {
    getItems():IInventoryItem[]{
        /* items is of Type of IInventoryItems as array and then initialize
        * it to an empty array or now to a list of items array defined in line*/
        let items:IInventoryItem[] =[{
            guid:'item1',
            name:'Scuba Watch',
            price:151.99
        },{
            guid:'item2',
            name:'light saber',
            price:1000

        },{
            guid:'item3',
            name:'r2d2',
            price:2000
        }];
        return items;
    }

}

export {
    InventoryService
}

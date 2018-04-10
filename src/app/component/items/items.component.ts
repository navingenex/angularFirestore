import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }
  deleteItem(event, item) {
    this.itemService.deleteItem(item);
  }
  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item){
    this.itemService.updateItem(this.itemToEdit);
    this.clearState();
  }

  clearState(){
    this.editState=false;
    this.itemToEdit=null;
  }

}

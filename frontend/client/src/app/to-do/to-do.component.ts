import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{Item} from '../model/items';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers : [DataService]
})
export class ToDoComponent implements OnInit {
  ToDoItems :Item[] = [];
  message :String;

  constructor(private dataservice : DataService) { }

  //get all items
  getItems(){
    this.dataservice.getAllItems().subscribe(items =>{
      this.ToDoItems = items;
      console.log(this.ToDoItems);
    });
  }

  //add an item
  addItems(form){
    let newItem : Item ={
      item_name : form.value.itemname,
      item_done : false
    }
    this.dataservice.addItem(newItem).subscribe(item=>{
      this.message = item.msg;
      console.log(this.message);
      this.getItems();
    });
  }
  //delete an item
  delete(id){
    this.dataservice.deleteItem(id).subscribe(result =>{
      if(result.n == 1){
        this.message = "deleted successfully";
        this.getItems();
      }
    });
  }

  //update an item
  update(item){
  item.item_done = !item.item_done;
  this.dataservice.updateItem(item).subscribe(result =>{
    this.message = result.msg;
    console.log(this.message);
  });
}

  ngOnInit() {
    this.getItems();
  }

}

import { Injectable } from '@angular/core';
import { Http , Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http : Http) { }
  getAllItems(){
    return this.http.get("http://localhost:3000/items").map(res => res.json());
  }
  addItem(newItem){
    let headers = new Headers();
    headers.append("content-type","application/json");
    return this.http.post("http://localhost:3000/item",newItem,{headers : headers}).map(res=>res.json());
  }
  deleteItem(_id){
    return this.http.delete("http://localhost:3000/item/"+_id).map(res=>res.json());
  }
  updateItem(item){
    let headers = new Headers();
    headers.append("content-type","application/json");
    return this.http.put("http://localhost:3000/item/"+item._id,item,{headers : headers}).map(res=>res.json());
  }

}

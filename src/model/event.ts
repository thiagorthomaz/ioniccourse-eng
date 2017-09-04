import { Room } from '../model/room';

export class Event extends Room {

  public details : string;

  constructor (id:number, title:string, address:string, image:string,price:number, details : string) {
    super(id, title, address, image,price);
    
    this.id = id;
    this.title = title;
    this.address = address;
    this.image = image;
    this.price = price;
    this.details = details;
  }

}

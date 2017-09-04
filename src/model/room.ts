export class Room {
  id : number;
  title:string;
  image:string;
  address:string;
  price:number;
  email:string;
  type:string;
  city:string = "Curitiba";

  constructor();
  constructor (id?:number, title?:string, address?:string, image?:string,price?:number);
  constructor (id?:number, title?:string, address?:string, image?:string,price?:number) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.image = image;
    this.price = price;

  }

  showFormattedAddress() : string {
    return this.address + ", " + this.city;
  }

}

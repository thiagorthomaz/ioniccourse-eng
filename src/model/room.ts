export class Room {
  id : number;
  title:string;
  image:string;
  address:string;
  price:number;
  city:string = "Curitiba";

  constructor (id:number, title:string, address:string, image:string,price:number) {
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

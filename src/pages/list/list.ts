import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';
import { ActionSheetController } from 'ionic-angular';

import { RoomInterface } from '../../model/roomInterface';
import { Room } from '../../model/room';
import { Event } from '../../model/event';


/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  list: Array<Room>;
  listOfInterface: Array<RoomInterface>;
  today: Date = new Date();
  sortProperty: string;

  itemTapped : (item :any) => void = (item) => {

    this.navCtrl.push(DetailsPage, {
      item: item.id
    });

  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertController: AlertController,
    public roomProvider: RoomProvider,
    public actionSheetCtrl: ActionSheetController
    ) {
      this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }





  getData() {

    this.roomProvider.getAll().subscribe(
      data => {
        this.list = data.json().map(o => {

          this.listOfInterface = <RoomInterface[]> data.json();
          
          if (o.details) {
            return new Event(o.id, o.title, o.address, o.image, o.price, o.details)
          }
          return new Room(o.id, o.title, o.address, o.image, o.price)

        });
      },
      err => {
        this.presentErrorAlert();
      }
    );
  }

  doRefresh(refresher) {
    this.getData();
    refresher.complete();
  }

  presentErrorAlert() {
    let alert = this.alertController.create({
      title: 'Houve um erro',
      message: 'Houve um erro, por favor verifique a sua conexão com a internet e tente novamente.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Retentar',
          handler: () => {
            this.getData();
          }
        }
      ]
    });
    alert.present();
  }

  orderList() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Ordenar por',
    buttons: [
      {
        text: 'Título',
        handler: () => {
          this.sortProperty = "title";
        }
      },{
        text: 'Endereço',
        handler: () => {
          this.sortProperty = "address";
        }
      },{
        text: 'Preço',
        handler: () => {
          this.sortProperty = "price";
        }
      }
    ]
  });
  actionSheet.present();
}

onSearch(termo: string) {
  alert(termo);
}

}

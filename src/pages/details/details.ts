import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';
import { Room } from '../../model/room';
import { Event } from '../../model/event';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item: Room;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertController: AlertController,
    public roomProvider: RoomProvider) {
      this.getData();
  }


  getData() {

    var id = this.navParams.get("id");

    this.roomProvider.getById(id).subscribe(
      data => {
        var json = data.json();
        if (json.details) {
          return new Event(json.id, json.title, json.address, json.image, json.price, json.details);
        }
        this.item = new Room(json.id, json.title, json.address, json.image, json.price);
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the RoomProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RoomProvider {

  loading: any;

  constructor(
    public http: Http,
    public loadingCtrl: LoadingController) {
  }

  removeLoading() {
    this.loading.dismissAll();
  }

  getAll() {
    this.loading = this.loadingCtrl.create({content: "Carregando..."});
    this.loading.present();
    var request = this.http.get('http://localhost/renton/?a=all');
    return request;
  }

  getById(id: number) {
    this.loading = this.loadingCtrl.create({content: "Carregando..."});
    this.loading.present();

    var request = this.http.get('http://localhost/renton/?id='+id);

    return request;

  }

}

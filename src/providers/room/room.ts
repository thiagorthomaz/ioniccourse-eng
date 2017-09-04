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
    var request = this.http.get('http://www.mocky.io/v2/59aad7be270000400def71fd');

    request.subscribe(
      data => { this.removeLoading(); },
      err => { this.removeLoading(); }
    );

    return request;
  }

  getById(id: number) {
    this.loading = this.loadingCtrl.create({content: "Carregando..."});
    this.loading.present();

    var request = this.http.get('http://www.mocky.io/v2/59a752951000001604837302');

    request.subscribe(
      data => { this.removeLoading(); },
      err => { this.removeLoading(); }
    );

    return request;

  }

}

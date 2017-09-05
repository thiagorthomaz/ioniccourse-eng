import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Room } from '../../model/room';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { RoomDatabaseProvider } from '../../providers/room-database/room-database';


/**
 * Generated class for the AddEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit',
  templateUrl: 'add-edit.html',
})
export class AddEditPage {

  room : Room = new Room();
  isReactiveForm :boolean;
  roomForm : FormGroup;
  base64CameraImage : string;
  error : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder : FormBuilder,
    private camera:Camera,
    private roomDatabaseProvider:RoomDatabaseProvider,
    private platform:Platform
  ) {


    this.roomForm = new FormGroup({
      'title' : new FormControl(this.room.title, [
        Validators.required
      ]),
      'email' : new FormControl(this.room.email, [
        Validators.required
      ]),
      'address' : new FormControl(this.room.address, [
        Validators.required
      ]),
      'type' : new FormControl(this.room.type, [
        Validators.required
      ])
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditPage');
  }

  submit() {

    if (this.isReactiveForm) {
      this.setValueOfReactiveForm();
    }

    this.add();

    console.log(this.room);


  }

  setValueOfReactiveForm(){
    var _formValue = this.roomForm.value;
    this.room = new Room(
      0,
      _formValue.title,
      _formValue.address,
      _formValue.image,
      _formValue.price
    );


  }

  add() {

    if (this.platform.is('cordova')) {
      console.log("Trying to add.");

      this.room.image = this.base64CameraImage ? this.base64CameraImage:
      "http://www.imprintables.com/content/images/thumbs/default-image_450.png";
      this.roomDatabaseProvider.add(this.room).then(data => {
        console.log("room add " + JSON.stringify(data));
        this.navCtrl.pop();
      });
    }


  }

  getUserPhoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64CameraImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     this.error = err;
    });

  }


}

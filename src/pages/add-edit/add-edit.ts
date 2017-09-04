import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from '../../model/room';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder : FormBuilder
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

}

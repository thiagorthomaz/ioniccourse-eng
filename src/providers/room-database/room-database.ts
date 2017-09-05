import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {BehaviorSubject} from 'rxjs/Rx';

import { Room } from '../../model/room'
import { Platform } from 'ionic-angular'

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/*
  Generated class for the RoomDatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RoomDatabaseProvider {

  database:SQLiteObject;
    databaseReady: BehaviorSubject<boolean>;

    createDatabaseSql:string = "CREATE TABLE IF NOT EXISTS room (id INTEGER, title TEXT, image BLOB, type TEXT, address TEXT, email TEXT, price REAL);";
    ready : boolean;
    
    constructor(private sqlite:SQLite, private platform:Platform) {
      this.databaseReady = new BehaviorSubject(false);
      this.createDatabase();
    }

    getAll() {
      return this.database.executeSql("SELECT * FROM room", []).then((data) => {
        let objects = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            objects.push(new Room(data.rows.item(i).id, data.rows.item(i).title, data.rows.item(i).address, data.rows.item(i).image, data.rows.item(i).price));
          }
        }
        return objects;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }

    search(query) {
      return this.database.executeSql("SELECT * FROM room WHERE title = ? OR address = ?", [query, query]).then((data) => {
        let objects = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            objects.push(new Room(data.rows.item(i).id, data.rows.item(i).title, data.rows.item(i).address, data.rows.item(i).image, data.rows.item(i).price));
          }
        }
        return objects;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }

    getById(room:Room) {
      return this.database.executeSql("SELECT * FROM room WHERE id = ?", [room.id]).then((data) => {

        if (data.rows.length > 0) {

          return new Room(data.rows.item(0).id, data.rows.item(0).title, data.rows.item(0).address, data.rows.item(0).image, data.rows.item(0).price);

        }
        return null;
      }, err => {
        console.log('Error: ', err);
        return null;
      });
    }

    deleteAll() {
      return this.database
      .executeSql("DELETE FROM room", []).then((data) => {
        return data;
      }, err => {
        console.log('Error: ', err);
        return false;
      });
    }

    add(room:Room) {
      let values = [room.title, room.image, room.type, room.address, room.email, room.price];
      return this.database.executeSql("INSERT INTO room (title, image, type, address, email, price) VALUES (?, ?, ?, ?, ?, ?)", values).then((data) => {
        return data;
      }, err => {
        console.log('Error: ', err);
        return false;
      });
    }

    edit(room:Room) {
      let values = [room.id, room.title, room.image, room.type, room.address, room.email, room.price];
      return this.database.executeSql("INSERT INTO room (title, image, type, address, email, price) WHERE id = ? VALUES (?, ?, ?, ?, ?, ?)", values).then((data) => {
        return data;
      }, err => {
        console.log('Error: ', err);
        return false;
      });
    }


    createDatabase() {
      this.platform.ready().then(() => {

        if (this.platform.is('cordova')) {
        this.sqlite.create({
          name: 'database.db',
          location: 'default'
        })
          .then((db:SQLiteObject) => {
            this.database = db;

            this.database.executeSql(this.createDatabaseSql, []).then(data => {

              this.databaseReady.next(true);
              this.ready = true;
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });

          });

        }

      });


    }

}

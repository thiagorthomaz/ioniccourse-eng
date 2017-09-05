import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

/*
  Generated class for the RoomOrmProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RoomOrmProvider {

  private db;

  // USE .THEN

  constructor(public http: Http) {
    console.log('Hello RoomOrmProvider Provider');

    PouchDB.plugin(cordovaSqlitePlugin);
    this.db = new PouchDB('birthdays.db', { adapter: 'cordova-sqlite' });

  }


  add(room) {
    return this.db.post(room);
  }

  edit(room) {
    return this.db.put(room);
  }

  geyById(room) {
    return this.db.get(room.id);
  }

  getAll() {
    return this.db.allDocs({ include_docs: true})
      .then(docs => {

        // Each row has a .doc object and we just want to send an
        // array of birthday objects back to the calling controller,
        // so let's map the array to contain just the .doc objects.

        let objects = docs.rows.map(row => {
          return row.doc;
        });

        return objects;
      });
  }

}

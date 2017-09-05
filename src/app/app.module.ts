import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { AddEditPage } from '../pages/add-edit/add-edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoomProvider } from '../providers/room/room';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { RoomDatabaseProvider } from '../providers/room-database/room-database';
import { RoomOrmProvider } from '../providers/room-orm/room-orm';
import { Globalization } from '@ionic-native/globalization';


export function createTranslateLoader(http:Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    AddEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    PipesModule,
    DirectivesModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    AddEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomProvider,
    RoomDatabaseProvider,
    SQLite,
    RoomOrmProvider,
    Globalization,
    { provide: LOCALE_ID, useValue:navigator.language }
  ]
})
export class AppModule {}

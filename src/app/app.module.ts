import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

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
    ReactiveFormsModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomProvider
  ]
})
export class AppModule {}

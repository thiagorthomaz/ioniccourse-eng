import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
//import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  defaultLanguage :string = navigator.language;

  availableLanguage :any[] = [
    {code : 'en', name : 'English'},
    {code : 'pt-BR', name : 'Português BR'}
  ];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate: TranslateService, private globalization: Globalization) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];*/

    this.pages = [];

    this.translate.get('HOME').subscribe(
      value => {
        this.pages[0] = ({title:value, component:HomePage});
      }
    );

    this.translate.get('LIST').subscribe(value => {
      this.pages[1] = ({title:value, component:HomePage});
    });


  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.globalization.getPreferredLanguage()
        .then(res => {
          this.translate.setDefaultLang(this.getSuitableLanguage(res.value));
        })
        .catch(e => console.log(e));




      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getSuitableLanguage(language){
      return this.availableLanguage.some(x=>x.code == language) ? language :this.defaultLanguage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

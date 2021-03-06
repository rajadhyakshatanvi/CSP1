import { BrowserModule } from '@angular/platform-browser';
import { Pro } from '@ionic/pro';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CameraPage } from '../pages/camera/camera';
import { RequestPage } from '../pages/request/request';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';




const firebaseAuth = {
  apiKey: "AIzaSyD7hV04hDq6OALh-AWxWM2jvA_1QP7fCBM",
    authDomain: "dbs3-bf9f4.firebaseapp.com",
    databaseURL: "https://dbs3-bf9f4.firebaseio.com",
    projectId: "dbs3-bf9f4",
    storageBucket: "dbs3-bf9f4.appspot.com",
    messagingSenderId: "24006357032"
};
const IonicPro = Pro.init('9c68906f');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CameraPage,
    RequestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CameraPage,
    RequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,


    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,

  ]
})
export class AppModule {}

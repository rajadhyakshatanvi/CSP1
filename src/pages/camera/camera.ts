import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { RequestPage } from '../request/request';
import { HomePage } from '../home/home';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public type: string;


  constructor(public navCtrl: NavController,public navParams: NavParams, public afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CameraPage');

  }

  pothole() {
    this.type = "Pothole";
    this.navCtrl.push(RequestPage, {
      param2: this.type
    });
  }
  garbage() {
    this.type = "Garbage";
    this.navCtrl.push(RequestPage, {
      param2: this.type
    });
  }

  logoutUser() {
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

}

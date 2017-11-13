import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  sendEmailVerification() {
    this.fire.authState.subscribe(user => {
        user.sendEmailVerification()
        .then(() => {
          let alert=this.alertCtrl.create({
            subTitle : 'Verification Email Sent.',
            buttons: ['OK', {
              text: 'Resend',
              handler: data => {
                  this.sendEmailVerification();
                  }
                }
            ]
          });
          alert.present();
        })
      });
  }

  registerUser() {
      this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then((res) => {
      this.sendEmailVerification();
      this.navCtrl.push(LoginPage);
      })
      .catch(error=> {
        var errormessage = error.message;
        let alert=this.alertCtrl.create({
          subTitle : errormessage,
          buttons: ['OK']
        });
        alert.present();
        console.log('got an error', error);
      })


  }

}

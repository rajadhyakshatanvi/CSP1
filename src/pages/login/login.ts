import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { CameraPage } from '../camera/camera';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      subTitle: message,
      buttons: ['OK']
    }).present();
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

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then(user => {
      if(user.emailVerified) {
        //this.alert("You are logged in")
        this.toastCtrl.create({
          message: 'You are logged in!',
          duration: 3000,
          position: 'top'
        }).present();
        this.navCtrl.setRoot(CameraPage);
      }
      else {
        this.alertCtrl.create({
          subTitle: 'Email not verified. Check your mail to verify your account.',
          buttons: ['OK', {
            text: 'Resend',
            handler: data => {
            this.sendEmailVerification();
            }
          }]
        }).present();
        //this.alert('Email not verified. Check your mail to verify your account.')

      }
    })
    .catch(error => {
      if(error.code == 'auth/user-not-found') {
        this.alert('Invalid Email');
      }
      else if(error.code == 'auth/wrong-password') {
        this.alert('Invalid Password');
      }
      else {
        console.log(error.code);
        this.alert(error.message);

      }

    })
  }

  sendPassword(email) {
    this.fire.auth.sendPasswordResetEmail(email)
    .then(() => {
      this.alert('Password reset email has been sent.');
    })
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Password Reset',
      message: "Enter your Email",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.sendPassword(data.email);
          }
        }
      ]
    });
    prompt.present();
  }



}

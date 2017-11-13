import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { storage } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Entry } from '../../models/entry';
import firebase from 'firebase';

declare var google;
declare var map;
declare var infoWindow;

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  public base64Image: string;
  public uid: string;
  public type: string;
  //public lati: number;
  //public lngi:number;

  ent = {} as Entry;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private geolocation: Geolocation,
              private afDatabase: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    this.base64Image = navParams.get('param1');
    this.type = navParams.get('param2');
    this.ent.type = this.type;
    this.ent.time = firebase.database.ServerValue.TIMESTAMP;



    afAuth.authState.subscribe(user => {
      if (!user) {
        this.uid = null;
        return;
      }
      this.uid = user.uid;

    });

    let that = this;
    setTimeout(function() {
      that.googleMap();
    },2000)

    this.geolocation.getCurrentPosition().then((resp) => {
    this.ent.latitude = resp.coords.latitude
    this.ent.longitude = resp.coords.longitude
    //let alert = this.alertCtrl.create({
      //title: this.lati,
      //subTitle: this.lngi,
      //buttons: ['OK']
    //});
    //alert.present();
}).catch((error) => {
  console.log('Error getting location', error);
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  googleMap() {
    let map: any;
    let infoWindow: any;
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 17
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };



            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, infoWindow, map.getCenter());
        }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser does not support geolocation.');
        infoWindow.open(map);
      }

      generateUUID() : string {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
      }

      getUrl(userId: string, imageId: string) {
        let storageRef = firebase.storage().ref();
        let imageRef = storageRef.child(`${userId}/${imageId}.jpg`);
        imageRef.getDownloadURL().then(url => {
          this.ent.imageUrl = url;

        }).then(() => {
          this.addToDatabase();
        })
      }

      uploadImage(){
        let storageRef = firebase.storage().ref();
        let imageName = this.generateUUID();
        let imageRef = storageRef.child(this.uid + '/' + imageName + '.jpg');
        imageRef.putString(this.base64Image, 'data_url').then((data) => {
          this.getUrl(this.uid,imageName);
        });

      }

      addToDatabase(){

        //this.ent.imageUrl = imageRef.getDownloadURL();
        //this.getUrl(this.uid, imageName);


        this.afAuth.authState.subscribe(auth => {
          this.afDatabase.list('requests/' +this.uid).push(this.ent);

        });

      }


}

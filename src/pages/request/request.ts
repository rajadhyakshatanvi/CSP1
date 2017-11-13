import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  public type: string;
  public lati: number;
  public lngi:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private geolocation: Geolocation) {
    this.base64Image = navParams.get('param1');
    this.type = navParams.get('param2');

    let that = this;
    setTimeout(function() {
      that.googleMap();
    },2000)

    this.geolocation.getCurrentPosition().then((resp) => {
    this.lati = resp.coords.latitude
    this.lngi = resp.coords.longitude
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
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


}

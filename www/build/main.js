webpackJsonp([4],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraPage = (function () {
    function CameraPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.pothole = function () {
        this.type = "Pothole";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__request_request__["a" /* RequestPage */], {
            param2: this.type
        });
    };
    CameraPage.prototype.garbage = function () {
        this.type = "Garbage";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__request_request__["a" /* RequestPage */], {
            param2: this.type
        });
    };
    CameraPage.prototype.logoutUser = function () {
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\camera\camera.html"*/`<ion-header >\n  <ion-navbar color="primary">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logoutUser()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home background">\n  <ion-fab bottom center>\n    <button ion-fab color="primary"  class="fab">\n      <ion-icon name="camera" isActive="false" class="fabicon"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab mini margin-bottom color="primary" (click)="pothole()">Pothole</button>\n      <button ion-fab mini margin-bottom color="primary" (click)="garbage()">Garbage</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\camera\camera.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
    ], CameraPage);
    return CameraPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var disabled = false;
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, alertCtrl, geolocation, camera, afDatabase, loadingCtrl, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.camera = camera;
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.disabled = false;
        //public lati: number;
        //public lngi:number;
        this.ent = {};
        //this.base64Image = navParams.get('param1');
        this.type = navParams.get('param2');
        this.ent.type = this.type;
        this.ent.time = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.disabled = false;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.uid = null;
                return;
            }
            _this.uid = user.uid;
        });
        var that = this;
        setTimeout(function () {
            that.googleMap();
        }, 2000);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.ent.latitude = resp.coords.latitude;
            _this.ent.longitude = resp.coords.longitude;
            //let alert = this.alertCtrl.create({
            //title: this.lati,
            //subTitle: this.lngi,
            //buttons: ['OK']
            //});
            //alert.present();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    RequestPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 0
            //      targetWidth: 1000,
            //      targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
        //this.loadingCtrl.dismiss();
    };
    RequestPage.prototype.googleMap = function () {
        var map;
        var infoWindow;
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 17
        });
        infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('You are here.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                this.handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    RequestPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser does not support geolocation.');
        infoWindow.open(map);
    };
    RequestPage.prototype.generateUUID = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    /*getUrl(userId: string, imageId: string) {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(`${userId}/${imageId}.jpg`);
      imageRef.getDownloadURL().then(url => {
        this.ent.imageUrl = url;

      }).then(() => {
        this.addToDatabase();
      })
    }*/
    RequestPage.prototype.uploadImage = function () {
        var _this = this;
        this.disabled = true;
        this.loadingCtrl.create({
            content: 'Please Wait...',
            dismissOnPageChange: true
        }).present();
        var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref();
        var imageName = this.generateUUID();
        var imageRef = storageRef.child(this.uid + '/' + imageName + '.jpg');
        imageRef.putString(this.base64Image, 'data_url').then(function (data) {
            imageRef.getDownloadURL().then(function (url) {
                _this.ent.imageUrl = url;
            }).then(function () {
                _this.addToDatabase();
            });
        });
    };
    RequestPage.prototype.addToDatabase = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            _this.afDatabase.list('requests/' + _this.uid).push(_this.ent);
        });
        this.navCtrl.pop().then(function () {
            _this.alertCtrl.create({
                title: 'Request Registered',
                subTitle: 'Thankyou for registering your request. You will receive the details of the request shortly.',
                buttons: ['OK']
            }).present();
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\request\request.html"*/`<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Request Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-card color="light">\n     <ion-card-header text-center >Request Type</ion-card-header>\n     <ion-card-content text-center>\n       {{type}}\n     </ion-card-content>\n  </ion-card>\n   <ion-card class="dispcard" color="light">\n      <ion-card-header text-center >Location</ion-card-header>\n      <ion-card-content #map id="map">\n      </ion-card-content>\n   </ion-card>\n   <ion-card color="light">\n      <ion-card-header text-center>Image</ion-card-header>\n      <ion-card-content id="img1" >\n        <img [src]="base64Image" *ngIf="base64Image" />\n      </ion-card-content>\n   </ion-card>\n   <button ion-button round block (click)="uploadImage()" [disabled]="disabled">Confirm</button>\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\request\request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(fire, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.fire.authState.subscribe(function (user) {
            user.sendEmailVerification()
                .then(function () {
                var alert = _this.alertCtrl.create({
                    subTitle: 'Verification Email Sent.',
                    buttons: ['OK', {
                            text: 'Resend',
                            handler: function (data) {
                                _this.sendEmailVerification();
                            }
                        }
                    ]
                });
                alert.present();
            });
        });
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (res) {
            _this.sendEmailVerification();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            var errormessage = error.message;
            var alert = _this.alertCtrl.create({
                subTitle: errormessage,
                buttons: ['OK']
            });
            alert.present();
            console.log('got an error', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\register\register.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="email" placeholder="Email" #email></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="Password" #password></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n        <div padding>\n          <button ion-button round block (click)="registerUser()">Register</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		505,
		3
	],
	"../pages/login/login.module": [
		506,
		2
	],
	"../pages/register/register.module": [
		507,
		1
	],
	"../pages/request/request.module": [
		508,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\home\home.html"*/`<ion-content class="background">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <button ion-button round  outline block (click)="signIn()" >Sign In</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <button ion-button round outline block (click)="register()" >Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_request_request__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseAuth = {
    apiKey: "AIzaSyD7hV04hDq6OALh-AWxWM2jvA_1QP7fCBM",
    authDomain: "dbs3-bf9f4.firebaseapp.com",
    databaseURL: "https://dbs3-bf9f4.firebaseio.com",
    projectId: "dbs3-bf9f4",
    storageBucket: "dbs3-bf9f4.appspot.com",
    messagingSenderId: "24006357032"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(http, afd) {
        this.http = http;
        this.afd = afd;
        //console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.addUserId = function (userid) {
        this.afd.list('/requests/').push(userid);
    };
    FirebaseServiceProvider.prototype.addDate = function () {
    };
    FirebaseServiceProvider.prototype.addType = function () {
    };
    FirebaseServiceProvider.prototype.addCoords = function () {
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera_camera__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(fire, navCtrl, navParams, alertCtrl, toastCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.fire.authState.subscribe(function (user) {
            user.sendEmailVerification()
                .then(function () {
                var alert = _this.alertCtrl.create({
                    subTitle: 'Verification Email Sent.',
                    buttons: ['OK', {
                            text: 'Resend',
                            handler: function (data) {
                                _this.sendEmailVerification();
                            }
                        }
                    ]
                });
                alert.present();
            });
        });
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
            .then(function (user) {
            if (user.emailVerified) {
                //this.alert("You are logged in")
                _this.toastCtrl.create({
                    message: 'You are logged in!',
                    duration: 3000,
                    position: 'top'
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__camera_camera__["a" /* CameraPage */]);
            }
            else {
                _this.alertCtrl.create({
                    subTitle: 'Email not verified. Check your mail to verify your account.',
                    buttons: ['OK', {
                            text: 'Resend',
                            handler: function (data) {
                                _this.sendEmailVerification();
                            }
                        }]
                }).present();
                //this.alert('Email not verified. Check your mail to verify your account.')
            }
        })
            .catch(function (error) {
            if (error.code == 'auth/user-not-found') {
                _this.alert('Invalid Email');
            }
            else if (error.code == 'auth/wrong-password') {
                _this.alert('Invalid Password');
            }
            else {
                console.log(error.code);
                _this.alert(error.message);
            }
        });
    };
    LoginPage.prototype.sendPassword = function (email) {
        var _this = this;
        this.fire.auth.sendPasswordResetEmail(email)
            .then(function () {
            _this.alert('Password reset email has been sent.');
        });
    };
    LoginPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.sendPassword(data.email);
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\login\login.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Email" #username></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="Password" #password></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n        <div padding>\n          <button ion-button round block (click)="signInUser()">Sign In</button>\n        </div>\n        <a (click)=\'showPrompt()\'>Forgot Password?</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Owner\Documents\Ionic\CSP1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map
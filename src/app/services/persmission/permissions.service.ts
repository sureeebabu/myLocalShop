import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private alertCtrl: AlertController,
  ) { }

  async checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          // If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
          // If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        console.log(err);
        // alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log('4');
      } else {
        // Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              // Show alert if user click on 'No Thanks'
              this.enableGpsAlertFn();
              // alert('requestPermission Error requesting location permissions ' + error);
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
      },
      error => {
        this.enableGpsAlertFn();
        // this.checkGPSPermission();
        // alert('Error requesting location permissions ' + JSON.stringify(error));
      }
    );
  }

  async enableGpsAlertFn() {
    const alert = await this.alertCtrl.create({
      header: `If you don't enable GPS, Registration Not To be Done. Please Enable GPS`,
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            // this.checkGPSPermission();
            navigator['app'].exitApp();
          }
        },
        {
          text: 'YES',
          handler: () => {
            // navigator['app'].exitApp();
            this.checkGPSPermission();
          }
        }
      ]

    });

    await alert.present();
  }
}

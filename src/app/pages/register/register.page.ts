import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  address: string;
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,

  ) { }

  ngOnInit() {
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      // this.strLat = resp.coords.latitude;
      // this.strLong = resp.coords.longitude;
      this.getUserAddress(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getUserAddress(lat, long) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lat, long, options).then((result: NativeGeocoderResult[]) => {
      // alert(JSON.stringify(result[0]));
      this.address = this.generateAddress(result[0]);
      // this.validationsForm.controls['address'].setValue(addfrmGPS);
      console.log(JSON.stringify(result[0]));
    }).catch((error: any) => {
      console.log(JSON.stringify(error));
      console.log(error);
    });
  }


  generateAddress(addressObj) {
    const obj = [];
    let address = '';
    for (const key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (const val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }

}

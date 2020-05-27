import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkchkService, ConnectionStatus } from './services/network/networkchk.service';
import { PermissionsService } from './services/persmission/permissions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Edit Profile',
      url: '/',
      icon: 'person'
    },
    {
      title: 'My Cart',
      url: '/',
      icon: 'cart'
    },
    {
      title: 'Change Password',
      url: '/',
      icon: 'lock-closed'
    },
    {
      title: 'About Us',
      url: '/',
      icon: 'person-circle'
    },
    {
      title: 'Contact US',
      url: '/',
      icon: 'call'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkchkService,
    private androidPermission: PermissionsService,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.androidPermission.checkGPSPermission();
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        console.log(status);
        // if (status === ConnectionStatus.Online) {
        //   this.offlineManager.checkForEvents().subscribe();
        // }
      });
    });
  }
}

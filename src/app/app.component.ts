import { Component } from '@angular/core';
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
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkchkService,
    private androidPermission: PermissionsService,
  ) {
    this.initializeApp();
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

import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  constructor(
    private platform: Platform,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      if (this.router.url === '/home' || this.router.url === '/') {
        navigator['app'].exitApp();
      }
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

}

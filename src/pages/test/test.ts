import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TestNextPage } from '../test-next/test-next';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  constructor(public navCtrl: NavController) {
  }
  
  btnTapped(event) {
    this.navCtrl.push(TestNextPage);
  }
}

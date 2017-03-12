import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { TestNextPage } from '../test-next/test-next';

import { TutorialService } from '../../providers/tutorial-service';

@Component({
  selector: 'page-test',
  providers: [TutorialService], 
  templateUrl: 'test.html'
})

export class TestPage {
  constructor(public navCtrl: NavController, private tutorialService: TutorialService) {
  }
  
  btnTapped(form: NgForm): void {
    this.tutorialService.writeData(form.value.name, form.value.keyword); 
    this.navCtrl.push(TestNextPage, {service: this.tutorialService});
  }
}

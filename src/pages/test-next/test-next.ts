import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-test-next',
  templateUrl: 'test-next.html'
})
export class TestNextPage {

  dbitems: any = new Array();
  
  constructor(private navParams: NavParams) {
    let tutorialService = navParams.get('service');
    tutorialService.getData(this.okFunc); 
  }
  
  okFunc(items: any): void {
    console.log(items);
    for (let key in items) {
      
      let item = items[key];
      
      console.log(item);
      this.dbitems.push(item);
    }
  }
  
}

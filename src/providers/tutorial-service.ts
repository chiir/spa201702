import { Injectable } from '@angular/core';

import firebase from 'firebase';

/**
 * Tutorial サービス
 * 内部で firebase と tutorialを呼び出す。
 */
@Injectable()
export class TutorialService {

  // Firebase インスタンス
  private fdb: firebase.database.Database;
  
  // Firebase接続情報
  private static readonly config = {
    apiKey: "AIzaSyAfO6is1VAE8er3ACD3Q9g1JIQs-Znv1aQ",
    authDomain: "myionic2project-2e6f4.firebaseapp.com",
    databaseURL: "https://myionic2project-2e6f4.firebaseio.com",
    storageBucket: "myionic2project-2e6f4.appspot.com",
    messagingSenderId: "36470292675"
  };
  
  /**
   * 
   */
  constructor() {

    // Initialize Firebase
    firebase.initializeApp(TutorialService.config);
    this.fdb = firebase.database();
  }
  
  writeData(name: string, keyword: string): void {
    let newId = this.fdb.ref().child('items').push().key;
    this.fdb.ref('items/' + newId).set({
        name: name,
        keyword: keyword
    });
  }
  
  getData(okFunc): void {
    let ref = this.fdb.ref("items");
    
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      okFunc(snapshot.val());
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    
  }
  
}

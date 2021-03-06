import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  imagen="";
  album="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      console.log(this.navParams.get('imagen'));
      console.log(this.navParams.get('album'));
      this.imagen=this.navParams.get('imagen');
      this.album=this.navParams.get('album');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverPage');
  }

}

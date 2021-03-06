import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {
  songs="";
  album="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('songs'));
    console.log(this.navParams.get('album'));
    this.songs=this.navParams.get('songs');
    this.album=this.navParams.get('album');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsPage');
  }

}

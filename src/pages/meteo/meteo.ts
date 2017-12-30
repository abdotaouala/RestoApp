import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {MeteoService} from "../../services/meteo.service";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
    meteo:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl:LoadingController,public meteoService:MeteoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }
  ongetMeteo(dataForm){
    let loading=this.loadingCtrl.create({
      content:"loading ..."
    });
    loading.present();
    this.meteoService.getMeteo(dataForm.ville).subscribe(data=>{
      this.meteo=data;
      console.log(data)
      loading.dismiss();
    },err=>{

      console.log(err);
      loading.dismiss();
    })
  }
}

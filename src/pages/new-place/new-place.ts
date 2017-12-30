import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Place} from "../../model/place.model";
import {PlacesService} from "../../services/places.service";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public geolocation:Geolocation,
  public placesServices:PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(palce:Place){
    palce.location={
      longitude:0,latitude:0
    }
    palce.timestamp=new Date().getTime();

    this.geolocation.getCurrentPosition().then(data=>{
      palce.location.longitude=data.coords.longitude;
      palce.location.latitude=data.coords.latitude;
      this.placesServices.addPlace(palce);
      this.navCtrl.pop();
    }).catch(err=>{
      palce.location.longitude=0;
      palce.location.latitude=0;
      this.placesServices.addPlace(palce);
      this.navCtrl.pop();
    })


  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.service";
import {NewPlacePage} from "../new-place/new-place";
import {Place} from "../..//model/place.model";
import {DetailPlacePage} from "../detail-place/detail-place";

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  places:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  placesService:PlacesService) {
  }
  ionViewWillEnter(){
    this.placesService.getAllPlaces().then(data=>{
      this.places=data;
    }).catch(err=>{
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  onNewPlace(){
    this.navCtrl.push(NewPlacePage)
  }
  onDetailPlace(p:Place){
    this.navCtrl.push(DetailPlacePage,{place:p})
  }
}

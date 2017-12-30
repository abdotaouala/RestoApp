/**
 * Created by MUSSAT on 30/12/2017.
 */



import {Injectable} from "@angular/core";
import {Place} from "../model/place.model";
import {platformBrowser} from "@angular/platform-browser";
import {Storage} from "@ionic/storage";
@Injectable()

export class PlacesService{

    constructor(public storage:Storage){}
    public  places:Array<Place>=[
        {title:"A"},{title:"B"},{title:"C"}
    ] ;

    addPlace(place:Place){

        this.places.push(place)
        this.storage.set('places',this.places)
    }
    getAllPlaces(){
        return this.storage.get('places').then(data=>{
            this.places=data!=null?data:[];
            return this.places.slice();
        });
    }
}
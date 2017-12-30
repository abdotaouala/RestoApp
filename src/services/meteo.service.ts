/**
 * Created by MUSSAT on 30/12/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class MeteoService{
    constructor(private http:Http){}
    getMeteo(keyword :string){
        console.log(keyword)
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+keyword+'&APPID=4c97c50c634de2bb02901b3adec48c11')
            .map((resp)=> resp.json());
    }
}
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class GalleryService{
  constructor(private http:Http){}
  getImages(keyword :string,size:number,page:number){
    return this.http.get('https://pixabay.com/api/?key=6864564-9d974713bc6c7aa9a68347a38&q='+keyword+'&per_page='+size+'&page='+page
  )
  .map((resp)=> resp.json());
  }
}
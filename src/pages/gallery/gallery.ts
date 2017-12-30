import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import  "rxjs/add/operator/map";
import {GalleryService} from "../../services/gallery.service";
import {DetailImagePage} from "../detail-image/detail-image";
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
      motCle:string="";
      page:number=1;
      size:number=10;
      images:any={hits:[]};
      currentPage:number=1;
      totalPages:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public galleryService:GalleryService,
  private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
    onSearch(){


        this.images={hits:[]};
        this.doOnSearch();

    }
    doOnSearch(){
        let loading=this.loadingCtrl.create({
            content:"loading ..."
        });
        loading.present();
      this.galleryService.getImages(this.motCle,this.size,this.currentPage).subscribe(data=>{
        data.hits.forEach(h=>{
            this.images.hits.push(h)
        })
        this.totalPages=data.totalHits/this.size;
          loading.dismiss();
      },err=>{
        console.log(err);
      })
    }
  onDetailImage(im){
        this.navCtrl.push(DetailImagePage,{image:im});
  }

  doInfinite(infiniteScroll){
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      console.log(this.currentPage+'/'+this.totalPages)
        this.doOnSearch()
      infiniteScroll.complete();
    }
  }

}

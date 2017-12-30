import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    contact:any = {
        nom: 'Abdo',
        mail: 'ta@gmail.co',
        img: '/assets/imgs/logo.png'
    }

    constructor(public navCtrl: NavController) {

    }

}

/**
 * Created by MUSSAT on 30/12/2017.
 */

export class Place{
    title:string;
    town?:string;
    country?:string;
    keyWords?:string;
    selected?:boolean;
    timestamp?:number;
    location?:{
        latitude:number,
        longitude:number
    }
    photos?:string[];
}
/**
 * Created by MUSSAT on 28/12/2017.
 */

export interface Place{
    title:string,
    town?:string,
    country?:string,
    keyWords?:string,
    selected?:boolean,
    timestamp:number,
    coordinates?:{
        latitude:number,
        longitude:number
    }
    photos?:string[];
}
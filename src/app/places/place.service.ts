import { Injectable } from '@angular/core';
import {Place} from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place('p1', 'manhatan madison', 'descr', 'https://e00-elmundo.uecdn.es/yodona/blogs/fashion-code-city/imagenes_posts/2016/01/03/159688_343x192.jpg', 2345),
    new Place('p2', 'Santander', 'descr', 'https://cdn2.traveler.es/uploads/images/thumbs/es/trav/3/s/2019/30/el_verano_en_santander_se_vive_en_torno_a_su_bahia_6694_940x482.jpg', 2345),
  ];

  get places(){
    return [... this._places];
  }

  constructor() { }
}

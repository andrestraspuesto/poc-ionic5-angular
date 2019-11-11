import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private modalCtroller: ModalController){}


  ngOnInit() {
  }

  onBookPlace(){
    //this.router.navigateByUrl('/places/tabs/discover');
    //this.modalCtroller.create({component: CreateBookingComponent})
    this.modalCtroller.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: 'a place'
      }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(result =>{
      console.log(result.data, result.role);
    });
  }

}

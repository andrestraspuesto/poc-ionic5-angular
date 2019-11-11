import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBook(){
    this.modalCtrl.dismiss({message: 'book message'}, 'confirm');
  }
}

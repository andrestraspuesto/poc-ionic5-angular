import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  @Input() selectedPlace: string = 'none';
  constructor() { }

  ngOnInit() {
  }

}

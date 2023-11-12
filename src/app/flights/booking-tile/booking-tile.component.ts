import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-tile',
  templateUrl: './booking-tile.component.html',
  styleUrls: ['./booking-tile.component.scss']
})
export class BookingTileComponent implements  OnInit{
    @Input() booking
    offer: any;

    ngOnInit(): void {
        this.offer = JSON.parse(this.booking['offerData'])
    }

}

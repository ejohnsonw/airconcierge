import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";

@Component({
    selector: 'app-airport',
    templateUrl: './airport.component.html',
    styleUrls: ['./airport.component.scss']
})
export class AirportComponent  implements  OnInit{
    @Input() iataCode
    @Input() segment
    @Input() bookingId
    feeds
    private loading: boolean;

    constructor(public layoutService: LayoutService, private router: Router, private webservice: WebserviceService) {
        //layoutService.onMenuToggle()
    }


    loadFeed() {
        var req = {"bookingId":this.bookingId,"iataCode":this.iataCode, "flightNumber":this.segment['flight']}
        this.webservice.airportFeed(req).subscribe(data => {
            this.loading = false;
            this.feeds = data
        }, error => {
            this.loading = false;
        })
    }

    booking(b) {
        sessionStorage.setItem("booking", JSON.stringify(b))
        this.router.navigate(['flights', 'booking', b['bookingId']])
    }

    ngOnInit(): void {
        this.loadFeed()
    }

}

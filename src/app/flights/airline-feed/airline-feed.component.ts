import {Component, Input} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";

@Component({
  selector: 'app-airline-feed',
  templateUrl: './airline-feed.component.html',
  styleUrls: ['./airline-feed.component.scss']
})
export class AirlineFeedComponent {
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
        this.webservice.airlineFeed(req).subscribe(data => {
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

    debug(segment) {
        return JSON.stringify(segment)
    }
}

import {Component, Input} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
    @Input() bookings
    loading: any;
    offer: any;

    constructor(public layoutService: LayoutService, private router: Router, private webservice: WebserviceService) {
        ////layoutService.onMenuToggle()
    }



    compose(b) {

        this.webservice.compose(b).subscribe(data => {
            this.loading = false;
            // this.searchResult = data['data']
            // this.selectedOffers = data['data']['selectedOffers']
            // //localStorage.setItem("flights",JSON.stringify(data['data']))
        }, error => {
            this.loading = false;
        })
    }

    booking(b) {
        sessionStorage.setItem("booking", JSON.stringify(b))
        this.router.navigate(['traveler', 'booking', b['bookingId']])
    }
}

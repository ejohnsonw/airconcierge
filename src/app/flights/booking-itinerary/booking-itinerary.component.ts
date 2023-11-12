import {Component, EventEmitter, Inject, Input, NgZone, Output, PLATFORM_ID} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";
import * as am5 from "@amcharts/amcharts5";

@Component({
    selector: 'app-booking-itinerary',
    templateUrl: './booking-itinerary.component.html',
    styleUrls: ['./booking-itinerary.component.scss']
})
export class BookingItineraryComponent {
    private loading: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, public layoutService: LayoutService, private router: Router, private webservice: WebserviceService, private route: ActivatedRoute) {

    }

    @Input() bookingId: any
    booking
    private root!: am5.Root;
    selectedSegment: any;
    start = false;
    @Input() detail = false;
    @Output() segmentSelected = new EventEmitter()
    @Output() bookingRefreshed = new EventEmitter()
    containerClass: any;

    segmentSelect(s) {
        this.segmentSelected.emit(s)
        this.bookingRefreshed.emit(this.booking)
        console.log(s)
    }

    ngOnInit(): void {
        this.retrieveBooking()
        setInterval(this.retrieveBooking.bind(this), 10000)
        if (!this.detail) {
            this.containerClass = "clickable"
        }
    }

    retrieveBooking() {
        this.webservice.retrieveBooking(this.bookingId).subscribe(data => {
            this.loading = false;
            this.booking = data
            if (this.start) {
                this.start  = false

            }

        }, error => {
            this.loading = false;
        })
    }


    viewDetail() {
        if (!this.detail) {

            sessionStorage.setItem("booking", JSON.stringify(this.booking))
            this.router.navigate(['traveler', 'booking', this.booking['bookingId']])

        }
    }
}

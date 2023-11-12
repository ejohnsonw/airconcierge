import {Component, Inject, NgZone, PLATFORM_ID} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";
import * as moment from 'moment';
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-flight-admin',
    templateUrl: './flight-admin.component.html',
    styleUrls: ['./flight-admin.component.scss']
})
export class FlightAdminComponent {
     loading: boolean;
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, public layoutService: LayoutService, private router: Router, private webservice: WebserviceService, private route: ActivatedRoute, private messageService : MessageService) {

    }

    flight: any
    airline: any;
    newDepartureTime: any;
    cities: any;
    selectedCity: any;
    flightStatuses: any;
    selectedStatus: any;


    ngOnInit(): void {
        // this.route.params.subscribe(params => {
        //     if (params['bookingId'] != undefined) {
        //
        //     }
        // })
        this.flightStatuses = [
            {name: 'Active', code: "ACTIVE"},
            {name: 'Delayed', code: "DELAYED"},
            {name: 'Cancelled', code: "CANCELLED"},
            {name: 'Complete', code: "COMPLETE"}
        ];
        this.flight = JSON.parse(sessionStorage.getItem("flight"))
        this.airline = JSON.parse(sessionStorage.getItem("airline"))
        this.flight['newDepartureDate'] = new Date(this.flight['departureDate'])
        this.flight['selectedStatus'] = this.flight['status']
        this.load()
    }

    load() {

    }

    selectionChanged($event) {
        console.log($event.value)
    }

    updateStatus() {
        this.flight['newDepartureDate'] =   (moment(this.flight['newDepartureDate'])).format('yy-M-DTHH:mm:ss')
        this.loading = true;
        this.webservice.updateFlight(this.flight).subscribe(data=>{
            this.loading = false;
            this.messageService.add({severity:'success', summary:'', detail:'The status and/or departure has been updated:  '});
        },error=>{
            this.loading = false;
        })
    }
}

import {Component, Inject, NgZone, PLATFORM_ID} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";

@Component({
    selector: 'app-airline',
    templateUrl: './airline.component.html',
    styleUrls: ['./airline.component.scss']
})
export class AirlineComponent {
    airline: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, public layoutService: LayoutService, private router: Router, private webservice: WebserviceService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        // this.route.params.subscribe(params => {
        //     if (params['iataCode'] != undefined) {
        //
        //     }
        // })
        this.airline = JSON.parse(sessionStorage.getItem("airline"))

    }

    selectedFlight(flight) {
        sessionStorage.setItem("flight", JSON.stringify(flight))
        this.router.navigate(['airlines','flightAdmin',flight['flightNumber']])
    }
}

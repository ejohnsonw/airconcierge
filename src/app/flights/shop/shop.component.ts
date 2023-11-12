import {Component, OnInit} from '@angular/core';
import {WebserviceService} from "../../webservice.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import * as moment from 'moment';
import {BookFlightComponent} from "../book-flight/book-flight.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    private searchResult: any;
    ref: DynamicDialogRef | undefined;
    selectedOffers: any
    loading = false;
    origin: any;
    destination: any;
    filteredAirportsOrigin: any;
    filteredAirportsDestination: any[];
    airports: any;
    shop: any = {};
    departureDate: any;
    returnDate: any;

    constructor(private webservice: WebserviceService, public dialogService: DialogService, private router:Router) {

    }


    ngOnInit(): void {
        this.webservice.airports({}).subscribe((data) => {
            this.airports = data;
        });
        if (localStorage.getItem("origin")) {
            this.origin = JSON.parse(localStorage.getItem("origin"))
        }
        if (localStorage.getItem("destination")) {
            this.destination = JSON.parse(localStorage.getItem("destination"))
        }
        if (localStorage.getItem("departureDate")) {
            this.departureDate = new Date(JSON.parse(localStorage.getItem("departureDate")))
        }
        if (localStorage.getItem("returnDate")) {
            this.returnDate = new Date(JSON.parse(localStorage.getItem("returnDate")))
            this.load()
        }

    }

    load() {
        let req = {}
        // if (sessionStorage.getItem("search")) {
        //     req = JSON.parse(sessionStorage.getItem("search"))
        // }else{
        localStorage.setItem("origin", JSON.stringify(this.origin))
        localStorage.setItem("destination", JSON.stringify(this.destination))
        localStorage.setItem("departureDate", JSON.stringify(this.departureDate))
        localStorage.setItem("returnDate", JSON.stringify(this.returnDate))
        req = {
            "adults": 1,
            "cabin": "economy",
            "useCache": true,
            "cacheDir": "openshipft-test",
            "itineraryComponents": [{
                "origin": this.origin['code'],
                "leaving": (moment(this.departureDate)).format('yy-M-D'),
                "destination": this.destination['code'],
                "returning": (moment(this.returnDate)).format('yy-M-D')
            }]
        }
        // }

        this.loading = true
        this.webservice.flights(req).subscribe(data => {
            this.loading = false;
            this.searchResult = data['data']
            this.selectedOffers = data['data']['selectedOffers']
            sessionStorage.setItem("foundFlights", JSON.stringify("true"))
        }, error => {
            this.loading = false;
        })
        // if (sessionStorage.getItem("search")) {
        //     this.loading = false;
        //     let d = JSON.parse(localStorage.getItem("flights"))
        //     this.searchResult = d
        //     this.selectedOffers = d['selectedOffers']
        // } else {
        //
        // }

    }

    book(offer) {
        this.ref = this.dialogService.open(BookFlightComponent, {
            header: 'Book your flight',
            width: '40%',
            data: offer,
            contentStyle: {overflow: 'auto'},
            baseZIndex: 10000,
            maximizable: false
        });

        this.ref.onClose.subscribe((booking: any) => {
            if (booking) {
                //this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
                this.router.navigate(['traveler','bookings'])
            }
        });

        // this.ref.onMaximize.subscribe((value) => {
        //     this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        // });
    }

    selectedDestination($event: any) {
        this.destination = $event
    }

    selectedOrigin($event: any) {
        this.origin = $event
    }
}

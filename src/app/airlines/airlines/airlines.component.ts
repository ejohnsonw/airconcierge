import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements  OnInit{
    @Input() bookings
    loading: any;
    offer: any;
    airlines: any;

    constructor(public layoutService: LayoutService, private router: Router, private webservice : WebserviceService) {

    }


    load() {
        var req = {}
        this.webservice.airlines(req).subscribe(data=>{
            this.loading = false;
            this.airlines = data

        },error=>{
            this.loading = false;
        })
    }

    selectedAirline(b) {
        sessionStorage.setItem("airline",JSON.stringify(b))
        this.router.navigate(['airlines','airline',b['iataCode']])
    }

    ngOnInit(): void {
        this.load()
    }
}

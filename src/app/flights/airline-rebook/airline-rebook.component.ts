import {Component, Input} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";
import {timeInterval} from "rxjs";

@Component({
  selector: 'app-airline-rebook',
  templateUrl: './airline-rebook.component.html',
  styleUrls: ['./airline-rebook.component.scss']
})
export class AirlineRebookComponent {
    @Input() iataCode
    @Input() segment
    @Input() bookingId
    bookingInterval
    queueInterval
    private loading: boolean;
    rebook = {};
    rebookOptions = []
    constructor(public layoutService: LayoutService, private router: Router, private webservice: WebserviceService) {
        ////layoutService.onMenuToggle()
    }


    loadFeed() {
        var req = {"bookingId":this.bookingId,"iataCode":this.iataCode, "flightNumber":this.segment['flight']}
        this.webservice.rebookInformation(req).subscribe(data => {
            this.loading = false;
            this.rebook = data
            if(this.rebook['ahead'] == 0){
                clearInterval(this.queueInterval);
                clearInterval(this.bookingInterval);
            }
        }, error => {
            this.loading = false;
        })
    }

    updateQueue() {
        var req = {"bookingId":this.bookingId,"iataCode":this.iataCode, "flightNumber":this.segment['flight']}
        this.webservice.updateQueue(req).subscribe(data => {
            this.loading = false;
        }, error => {
            this.loading = false;
        })
    }

    booking(b) {
        sessionStorage.setItem("booking", JSON.stringify(b))
        this.router.navigate(['flights', 'booking', b['bookingId']])
    }

    recheck(){

    }
    ngOnInit(): void {
        this.loadFeed()
        this.bookingInterval = setInterval(this.loadFeed.bind(this),3000)
        this.queueInterval = setInterval(this.updateQueue.bind(this),5000)
    }
}

import { Component } from '@angular/core';
import {WebserviceService} from "../../webservice.service";
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent {
    selectedOffers: any
    loading = false;
    passenger = {};
    constructor(private webservice:WebserviceService, public dialogService: DialogService) {

    }

    ngOnInit(): void {
        if(sessionStorage.getItem("account")){
            let acc = JSON.parse(sessionStorage.getItem("account"))
            this.passenger['name'] = acc['name']
            this.passenger['email'] = acc['email']
        }
        this.load()
    }

    private load() {
        this.loading = true

            this.webservice.passenger(this.passenger).subscribe(data=>{
                this.loading = false;
                this.passenger = data
                //localStorage.setItem("flights",JSON.stringify(data['data']))
            },error=>{
                this.loading = false;
            })


    }
}

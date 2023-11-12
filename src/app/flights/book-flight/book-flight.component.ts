import {Component} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {WebserviceService} from "../../webservice.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-book-flight',
    templateUrl: './book-flight.component.html',
    styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent {
    passenger= {}
    offer: any
    private loading: boolean;
    constructor(public layoutService: LayoutService, private router: Router, private config: DynamicDialogConfig, private ref: DynamicDialogRef, private webservice : WebserviceService, private messageService: MessageService) {
        this.offer = this.config.data;
        if(sessionStorage.getItem("account")){
            let acc = JSON.parse(sessionStorage.getItem("account"))
            this.passenger['name'] = acc['name']
            this.passenger['email'] = acc['email']
        }
    }


    book() {
        this.passenger['offer'] = this.offer
        var that = this
        this.webservice.book(this.passenger).subscribe(data=>{
            this.loading = false;
            this.messageService.add({severity:'success', summary:'You are booked!', detail:'Your booking was sucessful:  '+data['bookingId']});
            this.router.navigate(['traveler'])
            that.ref.close()
        },error=>{
            this.loading = false;
        })
    }
}

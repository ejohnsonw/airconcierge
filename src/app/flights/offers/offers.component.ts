import {Component, Input} from '@angular/core';
import {BookFlightComponent} from "../book-flight/book-flight.component";
import {WebserviceService} from "../../webservice.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Router} from "@angular/router";
import {LayoutService} from "../../layout/service/app.layout.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
    @Input() offers;
    private ref: DynamicDialogRef;

    constructor(public layoutService:LayoutService, private webservice: WebserviceService, public dialogService: DialogService, private router:Router) {

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
}

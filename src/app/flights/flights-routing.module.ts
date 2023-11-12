import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {DialogService} from "primeng/dynamicdialog";
import {PassengerComponent} from "./passenger/passenger.component";
import {BookingComponent} from "./booking/booking.component";


@NgModule({

    imports: [
        RouterModule.forChild([
            {path: '', component: PassengerComponent},
            {path: 'flights', component: ShopComponent},
            {path: 'booking/:bookingId', component: BookingComponent}
        ])],
    exports: [RouterModule],
    providers: [DialogService]
})
export class FlightsRoutingModule {
}

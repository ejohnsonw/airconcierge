import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DialogService} from "primeng/dynamicdialog";
import {AirlinesComponent} from "./airlines/airlines.component";
import {AirlineComponent} from "./airline/airline.component";
import {FlightAdminComponent} from "./flight-admin/flight-admin.component";

@NgModule({

    imports: [
        RouterModule.forChild([
            {path: '', component: AirlinesComponent},
            {path: 'airline/:iataCode', component: AirlineComponent},
            {path: 'flightAdmin/:flightNumber', component: FlightAdminComponent},

        ])],
    exports: [RouterModule],
    providers: [DialogService]
})
export class AirlinesRoutingModule {
}

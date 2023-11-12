import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DialogService} from "primeng/dynamicdialog";
import {AirportsComponent} from "./airports/airports.component";

@NgModule({

    imports: [
        RouterModule.forChild([
            {path: '', component: AirportsComponent},

        ])],
    exports: [RouterModule],
    providers: [DialogService]
})
export class AirportsRoutingModule {
}

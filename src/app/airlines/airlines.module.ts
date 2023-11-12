import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {FlightsRoutingModule} from "../flights/flights-routing.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {PasswordModule} from "primeng/password";
import {TabViewModule} from "primeng/tabview";
import {AirlinesRoutingModule} from "./airlines-routing.module";
import { AirlinesComponent } from './airlines/airlines.component';
import { AirlineComponent } from './airline/airline.component';
import { FlightAdminComponent } from './flight-admin/flight-admin.component';
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
  declarations: [
    AirlinesComponent,
    AirlineComponent,
    FlightAdminComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DynamicDialogModule,
        AirlinesRoutingModule,
        ProgressSpinnerModule,
        PasswordModule,
        TabViewModule,
        CalendarModule,
        DropdownModule
    ]
})
export class AirlinesModule { }

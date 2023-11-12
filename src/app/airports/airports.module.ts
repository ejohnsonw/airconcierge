import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportsComponent } from './airports/airports.component';
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {PasswordModule} from "primeng/password";
import {TabViewModule} from "primeng/tabview";
import {AirportsRoutingModule} from "./airports-routing.module";



@NgModule({
  declarations: [
    AirportsComponent
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
        AirportsRoutingModule,
        ProgressSpinnerModule,
        PasswordModule,
        TabViewModule
    ]
})
export class AirportsModule { }

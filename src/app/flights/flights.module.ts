import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {FlightsRoutingModule} from "./flights-routing.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import { BookFlightComponent } from './book-flight/book-flight.component';
import {PasswordModule} from "primeng/password";
import { PassengerComponent } from './passenger/passenger.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingComponent } from './booking/booking.component';
import { BookingTileComponent } from './booking-tile/booking-tile.component';
import {TabViewModule} from "primeng/tabview";
import { AirportComponent } from './airport/airport.component';
import { SegmentComponent } from './segment/segment.component';
import { FeedTileComponent } from './feed-tile/feed-tile.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {ListboxModule} from "primeng/listbox";
import { AirportSelectComponent } from './airport-select/airport-select.component';
import {CalendarModule} from "primeng/calendar";
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AirlineFeedComponent } from './airline-feed/airline-feed.component';
import { AirlineRebookComponent } from './airline-rebook/airline-rebook.component';
import { OffersComponent } from './offers/offers.component';
import { BookingItineraryComponent } from './booking-itinerary/booking-itinerary.component';
import { HotelQuizComponent } from './hotel-quiz/hotel-quiz.component';
import {SliderModule} from "primeng/slider";
import {CheckboxModule} from "primeng/checkbox";



@NgModule({
  declarations: [
    ShopComponent,
    BookFlightComponent,
    PassengerComponent,
    BookingsComponent,
    BookingComponent,
    BookingTileComponent,
    AirportComponent,
    SegmentComponent,
    FeedTileComponent,
    AirportSelectComponent,
    AdvertisementComponent,
    AirlineFeedComponent,
    AirlineRebookComponent,
    OffersComponent,
    BookingItineraryComponent,
    HotelQuizComponent
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
        FlightsRoutingModule,
        ProgressSpinnerModule,
        PasswordModule,
        TabViewModule,
        AutoCompleteModule,
        ListboxModule,
        CalendarModule,
        SliderModule,
        CheckboxModule
    ]
})
export class FlightsModule { }

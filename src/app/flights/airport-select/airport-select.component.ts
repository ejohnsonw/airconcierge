import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {WebserviceService} from "../../webservice.service";
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-airport-select',
  templateUrl: './airport-select.component.html',
  styleUrls: ['./airport-select.component.scss']
})
export class AirportSelectComponent {
    @Input() airport: any;
    airports: any;
    filteredAirports: any;
    @Input() title: any;
    @Output() airportSelect = new EventEmitter()


    constructor(private webservice:WebserviceService, public dialogService: DialogService) {

    }

    ngOnInit(): void {
        this.webservice.airports({}).subscribe((data) => {
            this.airports = data;
        });

    }

    filterAirports(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.airports as any[]).length; i++) {
            let airport = (this.airports as any[])[i];
            if(airport['name'] || airport['city'] ){
                if(airport['name']){
                    if (airport.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                        filtered.push(airport);
                    }

                }else{
                    if(airport['city']){
                        if (airport.city.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                            filtered.push(airport);
                        }
                    }
                }

            }
        }

        this.filteredAirports = filtered;
    }

    selectedAirport($event: any) {
        this.airportSelect.emit($event)
    }
}

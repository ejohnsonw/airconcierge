import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }
    type
    ngOnInit() {
        if(sessionStorage.getItem("account")){
            let acc = JSON.parse(sessionStorage.getItem("account"))
            this.type =  acc['type']
        }
        switch (this.type){
            case 'traveler': this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Traveler', icon: 'pi pi-fw pi-home', routerLink: ['/traveler'] },
                        { label: 'Shop Flights', icon: 'pi pi-fw pi-home', routerLink: ['/traveler/flights'] }
                    ]
                }
            ];break;
            case 'airline': this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Airlines', icon: 'pi pi-fw pi-home', routerLink: ['/airlines'] },
                    ]
                }
            ];break;
            case 'airport': this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Airports', icon: 'pi pi-fw pi-home', routerLink: ['/airports'] },
                    ]
                }
            ];break;
        }

    }
}

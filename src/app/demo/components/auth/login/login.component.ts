import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password: string = "123456";
    email: string = "mk@ngeosone.com";

    constructor(public layoutService: LayoutService, private router:Router) { }

    signIn() {
        var record
        if(this.email == "mk@ngeosone.com"){
            record = {"type":"traveler","name":"Mark Jansen","email":"mk@ngeosone.com","command":"traveler"}

        }
        if(this.email == "airport@ngeosone.com"){
            record = {"type":"airport","name":"Mark Jansen","email":"mk@ngeosone.com","command":"airports"}
        }

        if(this.email == "airline@ngeosone.com"){
            record = {"type":"airline","name":"Mark Jansen","email":"mk@ngeosone.com","command":"airlines"}
        }
        sessionStorage.setItem("account",JSON.stringify(record))
        this.router.navigate([record['command']])
    }
}

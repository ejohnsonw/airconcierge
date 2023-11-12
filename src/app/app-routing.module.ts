import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {MessageService} from "primeng/api";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: 'dash', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            {
                path: 'traveler', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },

                ]
            },
            {
                path: 'airlines', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./airlines/airlines.module').then(m => m.AirlinesModule) },

                ]
            },
            {
                path: 'airports', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./airports/airports.module').then(m => m.AirportsModule) },

                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: [MessageService]
})
export class AppRoutingModule {
}

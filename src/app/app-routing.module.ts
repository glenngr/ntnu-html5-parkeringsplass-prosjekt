import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingSpaceMapHomeComponent } from './parking-space-overview/parking-space-overview.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { HelpAboutComponent } from './help-about/help-about.component';

const appRoutes: Routes = [
    { path: '', component: ParkingSpaceMapHomeComponent, pathMatch: 'full' },
    { path: 'help', component: HelpAboutComponent, pathMatch: 'full' },
    { path: 'about', component: HelpAboutComponent, pathMatch: 'full' },
    { path: '404', component: NotFound404Component, pathMatch: 'full' },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }

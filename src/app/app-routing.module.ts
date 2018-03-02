import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './home/home.route';
import { conceptRoutes } from './concept/concept.route';
import { offerRoutes } from './offer/offer.route';
import { demandRoutes } from './demand/demand.route';
import { profileRoutes } from './profile/profile.route';

const routes: Routes = [
    ...homeRoutes,
    ...conceptRoutes,
    ...offerRoutes,
    ...demandRoutes,
    ...profileRoutes,
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

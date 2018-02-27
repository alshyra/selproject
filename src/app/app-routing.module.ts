import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './home/home.route';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, ...homeRoutes];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

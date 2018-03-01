import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeModule } from './home/home.module';
import { DemandModule } from './demand/demand.module';
import { ProfileModule } from './profile/profile.module';
import { OfferModule } from './offer/offer.module';
import { ConceptModule } from './concept/concept.module';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        AppRoutingModule,
        HomeModule,
        DemandModule,
        ProfileModule,
        OfferModule,
        ConceptModule,
        FlexLayoutModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

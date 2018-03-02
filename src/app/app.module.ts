import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConceptModule } from './concept/concept.module';
import { DemandModule } from './demand/demand.module';
import { HomeModule } from './home/home.module';
import { OfferModule } from './offer/offer.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        LayoutModule,
        AppRoutingModule,
        ConceptModule,
        DemandModule,
        HomeModule,
        OfferModule,
        ProfileModule
    ],
    exports: [MatFormFieldModule, MatInputModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

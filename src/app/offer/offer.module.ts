import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OfferListComponent, OfferDetailComponent]
})
export class OfferModule { }

import { Routes, Route, RouterModule } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

const offerDetailRoutes: Route = {
    path: 'offers/{offer-id}',
    component: OfferDetailComponent
};

const offerListRoutes: Route = {
    path: 'offers',
    component: OfferListComponent
};
const routes: Routes = [offerDetailRoutes, offerListRoutes];

export { routes as offerRoutes };

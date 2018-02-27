import { Routes, Route, RouterModule } from '@angular/router';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { DemandListComponent } from './demand-list/demand-list.component';

const demandDetailRoutes: Route = {
    path: 'demands/{demand-id}',
    component: DemandDetailComponent
};

const demandListRoutes: Route = {
    path: 'demands',
    component: DemandListComponent
};

const routes: Routes = [demandDetailRoutes, demandListRoutes];

export { routes as offerRoutes };

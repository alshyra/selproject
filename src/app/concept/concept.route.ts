import { Routes, Route, RouterModule } from '@angular/router';
import { ConceptComponent } from './concept/concept.component';

const conceptRoutes: Route = {
  path: 'offers/{offer-id}',
  component: ConceptComponent
};

const routes: Routes = [conceptRoutes];

export { routes as conceptRoutes };

import { Routes, Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const homeRoutes: Route = {
  path: 'home',
  component: HomeComponent
};

const routes: Routes = [homeRoutes];

export { routes as homeRoutes };

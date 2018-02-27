import { Routes, Route, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const myProfileRoutes: Route = {
    path: 'my-profile',
    component: MyProfileComponent
};
const userDetailRoutes: Route = {
    path: 'users',
    component: UserListComponent
};
const userListRoutes: Route = {
    path: 'users/{id-user}',
    component: UserDetailComponent
};

const routes: Routes = [myProfileRoutes, userDetailRoutes, userListRoutes];

export { routes as profileRoutes };

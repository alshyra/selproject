import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MyProfileComponent, UserListComponent, UserDetailComponent]
})
export class ProfileModule {}

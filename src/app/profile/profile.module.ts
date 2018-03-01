import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
    declarations: [MyProfileComponent, UserListComponent, UserDetailComponent]
})
export class ProfileModule {}

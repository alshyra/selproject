import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
    public user: User;

    constructor() {}

    ngOnInit() {
        this.user = new User();
    }
}

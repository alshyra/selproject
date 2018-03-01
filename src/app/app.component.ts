import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public mobileQuery: MediaQueryList;
    public title = 'app';
    constructor(media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
    }
}

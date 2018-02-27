import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-concept',
    templateUrl: './concept.component.html',
    styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
    public newsList = [];
    constructor() {}

    ngOnInit() {
        this.newsList = [
            {
                title: 'title',
                content: 'content'
            }
        ];
    }
}

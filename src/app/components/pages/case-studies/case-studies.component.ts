import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-case-studies',
    templateUrl: './case-studies.component.html',
    styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
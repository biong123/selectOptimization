import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-tabs',
  templateUrl: './selection-tabs.component.html',
  styleUrls: ['./selection-tabs.component.css']
})
export class SelectionTabsComponent implements OnInit {



    tabActiveId = 'candidate';
    activeTabData;
    tabItems = [
        {
            id: 'tab1',
            title: 'Tab1',
            disabled: true,
            content: `Tab1 Content`
        },
        {
            id: 'tab2',
            title: 'Tab2',
            content: `Tab2 Content`
        },
        {
            id: 'tab3',
            title: 'Tab3',
            content: `Tab3 Content`
        },
    ];

    constructor() {
    }
    ngOnInit(): void {
        this.activeTabData = this.tabItems[0];
        setTimeout(() => {
            this.tabActiveId = 'selected';
        }, 100);
    }
    activeTabChange(tab) {
        this.activeTabData = this.tabItems.filter(item => item.id === tab)[0];
    }



}

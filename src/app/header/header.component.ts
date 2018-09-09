import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Output() customeChild_ClickedEvent = new EventEmitter<string>();

    OnClickOfTab(myVara: string) {
        this.customeChild_ClickedEvent.emit(myVara);
    }


}
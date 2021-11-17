import { Directive, OnInit, } from '@angular/core';

@Directive({
    selector: 'appBaseComponent'
})
export class BaseComponent implements OnInit {

    ngOnInit(): void {
        this.initialize();
    }

    initialize() {
        console.log('Original'); // for demo purposes only
    }

}

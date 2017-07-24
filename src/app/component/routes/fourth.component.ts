import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'fourth-comp',
    template: `<h2>Fourth component</h2>
                <h3>Message from third component is {{message}}</h3>`,
    styles: ['h2 {color: red}']
})
export class FourthComponent {
    message: string;
    constructor(private activatedRoute: ActivatedRoute) {
        this.message = this.activatedRoute.snapshot.params['message'];
    }


}
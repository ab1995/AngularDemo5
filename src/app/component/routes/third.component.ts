import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'thrid-comp',
    template: `<h2>Third component</h2>
            Message: <input type="text" #message><br>
            <input type="button" value="GO" (click)="onClick(message.value)">`,
    styles: ['h2 {color: red}']
})
export class ThirdComponent {
    constructor(private router: Router) {}
    onClick(value: string) {
        this.router.navigate(['/fourth', value]);
    }
}
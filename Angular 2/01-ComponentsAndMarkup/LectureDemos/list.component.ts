import { Component } from '@angular/core';

@Component({
    selector: 'myList',
    template: `
    <p>{{someNumber}}</p>
    <ul>
        <li *ngFor='let number of numbers'>
          {{number}}
        </li>
    </ul>
    `
})

export class ListComponent {
    numbers: Array<number>;
    someNumber: number

    constructor(){
        this.numbers = [5, 10, 15, 20]   
        this.someNumber = 1    
    } 
}
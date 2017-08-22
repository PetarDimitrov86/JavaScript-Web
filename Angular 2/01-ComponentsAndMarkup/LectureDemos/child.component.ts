import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template: `
    <h2>Child</h2>
    <h2>Child</h2>
    <h2>Child</h2>
    <div>{{fromParent}}</div>
    <button (click)="sendToParent()">Send data to Parent</button>
    `
})

export class ChildComponent {
    @Input() fromParent: string
    @Output() onSendingDataToParent = new EventEmitter<string>();

    sendToParent() {
        this.onSendingDataToParent.emit('Data to the parent')
    }
}
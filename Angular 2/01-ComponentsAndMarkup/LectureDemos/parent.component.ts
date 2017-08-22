import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    template: `
    <h1>Parent</h1>
    <child 
    [fromParent]='titleForChildElement'
    (onSendingDataToParent)='dataReceived($event)'
    >
    </child>
    `
})

export class ParentComponent {
    titleForChildElement = "My parent title";

    dataReceived(myData) {
        alert(myData);
    }
}
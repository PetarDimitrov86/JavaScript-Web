import { Component } from '@angular/core'

@Component({
    selector: 'home',
    template: `
    <div class='pesho'>
        <h1>Hello from {{title}}!</h1>
    </div>
    `,
    styles: [
        `.pesho { color: red; }`
    ] 
})

export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'Softuni'
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  isStringEmpty: boolean = true;

  adjustIsStringEmpty(event: any) {
    let inputText = event.target.value;
    if (inputText.length > 0)
      this.isStringEmpty = false;
    else
      this.isStringEmpty = true;
  }

  resetUsernameInput() {
    this.username = '';
    this.isStringEmpty = true;
  }
}
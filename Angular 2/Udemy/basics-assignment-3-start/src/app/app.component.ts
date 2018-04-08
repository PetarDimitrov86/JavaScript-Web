import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked: boolean = false;
  timesClicked: number = 0;
  log = [];

  showHideDetails(){
    this.timesClicked += 1;
    this.log.push(this.timesClicked);
    this.buttonClicked = !this.buttonClicked;
  }

  getBackgroundColor(cycleCount) {
    return cycleCount >= 4 ? 'blue' : '';
  }
}
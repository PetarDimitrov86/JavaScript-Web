import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked: boolean = false;
  timesClicked: number = 0;
  clickHistory = [];

  showHideDetails(){
    this.timesClicked += 1;
    this.clickHistory.push(this.timesClicked)
    if (this.buttonClicked === false)
      this.buttonClicked = true;
    else 
      this.buttonClicked = false;
  }

  getBackgroundColor(cycleCount) {
    return cycleCount >= 4 ? 'blue' : '';
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverStatusCreation:string = 'No server was created!';
  serverName:string = 'Initial test server name';
  serverCreated:boolean = false;

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 
    2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverStatusCreation = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
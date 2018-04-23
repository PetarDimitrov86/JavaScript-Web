import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: serverContentInput.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: serverContentInput.value});
  }

  ngOnInit() {
  }
}
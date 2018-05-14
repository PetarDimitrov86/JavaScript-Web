import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('onInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('doCheck called!');
  }

  ngAfterContentInit() {
    console.log('afterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('afterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('onDestroy called!');
  }
}
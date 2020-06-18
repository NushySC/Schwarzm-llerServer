import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput:ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // onAddServer() {
  // this.serverCreated.emit({
  // serverName: this.newServerName, 
  // serverContent: this.newServerContent})
  // }
  // onAddServer(serverNameInput) {
  //   console.log(serverNameInput.value);
  //   this.serverCreated.emit({
  //   serverName: serverNameInput.value, 
  //   serverContent: this.serverContentInput})
  //   }
  onAddServer(serverNameInput,serverContentInput: HTMLInputElement) {
    console.log(serverContentInput);
    this.serverCreated.emit({
      serverName:serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
   
    }
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     blueprintName: this.newServerName, 
  //     blueprintContent: this.newServerContent})
  // }
}

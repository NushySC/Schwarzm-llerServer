import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // tslint:disable-next-line: quotemark
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'testServer', content: 'just a test' }, { type: 'server', name: 'Second server', content: 'What is this good for?' }
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
    console.log(this.serverElements);
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}

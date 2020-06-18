import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
// all properties of component are only accesible from within, you need to be explicit about which properties you need to export, for that use @Input declarator, to expose that property.
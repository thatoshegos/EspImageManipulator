import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sharia-board",
  templateUrl: "./sharia-board.component.html",
  styleUrls: ["./sharia-board.component.css"]
})
export class ShariaBoardComponent implements OnInit {
  @Input() shariaContent;
  constructor() {}

  ngOnInit() {}
}

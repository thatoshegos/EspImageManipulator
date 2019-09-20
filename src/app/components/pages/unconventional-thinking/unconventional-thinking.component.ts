import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-unconventional-thinking",
  templateUrl: "./unconventional-thinking.component.html",
  styleUrls: ["./unconventional-thinking.component.css"]
})
export class UnconventionalThinkingComponent implements OnInit {
  @Input() unconventionalThink;
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-thinking-deeply",
  templateUrl: "./thinking-deeply.component.html",
  styleUrls: ["./thinking-deeply.component.css"]
})
export class ThinkingDeeplyComponent implements OnInit {
  @Input() deeplyThink;
  constructor() {}

  ngOnInit() {
    console.log(this.deeplyThink);
  }
}

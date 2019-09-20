import { Component, OnInit, Input } from "@angular/core";
import { debugOutputAstAsTypeScript } from "@angular/compiler";

@Component({
  selector: "app-feature-box",
  templateUrl: "./feature-box.component.html",
  styleUrls: ["./feature-box.component.css"]
})
export class FeatureBoxComponent implements OnInit {
  @Input() DataSets;
  constructor() {}

  ngOnInit() {}
}

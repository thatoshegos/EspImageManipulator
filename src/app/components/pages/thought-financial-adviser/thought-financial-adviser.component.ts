import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-thought-financial-adviser",
  templateUrl: "./thought-financial-adviser.component.html",
  styleUrls: ["./thought-financial-adviser.component.css"]
})
export class ThoughtFinancialAdviserComponent implements OnInit {
  @Input() financialAdviser;
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-saria-common",
  templateUrl: "./saria-common.component.html",
  styleUrls: ["./saria-common.component.css"]
})
export class SariaCommonComponent implements OnInit {
  @Input() reba;
  @Input() shariaInvest;
  @Input() investProcess;
  @Input() screenProcess;
  @Input() shariaBoard;
  @Input() podcast;
  constructor() {}

  ngOnInit() {}
}

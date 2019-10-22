import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-quaterly-card",
  templateUrl: "./quaterly-card.component.html",
  styleUrls: ["./quaterly-card.component.css"]
})
export class QuaterlyCardComponent implements OnInit {
  @Input() quaterlyData;
  constructor() {
    console.log('this1', this)
  }

  ngOnInit() {
    console.log(this.quaterlyData);
  }
}

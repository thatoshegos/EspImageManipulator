import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-up-quaterly-image-grid",
  templateUrl: "./up-quaterly-image-grid.component.html",
  styleUrls: ["./up-quaterly-image-grid.component.css"]
})
export class UpQuaterlyImageGridComponent implements OnInit {
  @Input() getImages;
  constructor() {}

  ngOnInit() {}
}

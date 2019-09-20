import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sharia-certificate",
  templateUrl: "./sharia-certificate.component.html",
  styleUrls: ["./sharia-certificate.component.css"]
})
export class ShariaCertificateComponent implements OnInit {
  @Input() shariaCerticate;
  constructor() {}

  ngOnInit() {}
}

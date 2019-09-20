import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-faq-detail",
  templateUrl: "./faq-detail.component.html",
  styleUrls: ["./faq-detail.component.css"]
})
export class FaqDetailComponent implements OnInit {
  @Input() faqs;
  currentFaq;
  isfirst = false;
  constructor() {}

  ngOnInit() {
    this.currentFaq = this.faqs.acf["qa-ans"][0];
    this.isfirst = true;
  }
  getClicked($event, faq, toggle) {
    if (this.currentFaq) {
      if (this.currentFaq != faq) {
        this.isfirst = true;
      } else {
        this.isfirst = !toggle;
      }
    }
    this.currentFaq = faq;
  }
}

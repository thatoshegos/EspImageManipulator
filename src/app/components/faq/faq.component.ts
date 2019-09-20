import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  @Input() faqs;
  @Input() fromStatusFaq;
  @Input() insightStatus;
  @Input() glossaryStatus;
  @Input() fromNewInvesting;
  isfirst = false;
  currentFaq;
  constructor() {}

  ngOnInit() {
    //console.log(this.faqs);
    this.currentFaq = this.faqs[0];
    this.isfirst = true;
  }
  getClicked(event, faq, toggle) {
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

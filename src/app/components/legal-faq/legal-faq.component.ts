import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-legal-faq',
  templateUrl: './legal-faq.component.html',
  styleUrls: ['./legal-faq.component.css']
})
export class LegalFaqComponent implements OnInit {
  @Input() faqs;
  @Input() fromStatusFaq;
  @Input() insightStatus;
  @Input() glossaryStatus;
  @Input() fromNewInvesting;
  isfirst = false;
  currentFaq;
  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
    //console.log(this.faqs);
    //console.log('faqs',this.faqs)
    this.currentFaq = this.faqs[0];
    this.isfirst = true;
  }

  getClicked(event, faq, toggle) {
    //console.log('faq', faq, toggle)
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

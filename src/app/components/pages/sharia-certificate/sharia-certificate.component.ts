import { Component, OnInit, Input } from "@angular/core";
import {ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-sharia-certificate",
  templateUrl: "./sharia-certificate.component.html",
  styleUrls: ["./sharia-certificate.component.css"]
})
export class ShariaCertificateComponent implements OnInit {
  @Input() shariaCerticate;
  private fragment: string;
  element;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.element = document.querySelector('#easy-to-invest')
    //console.log('this.element',this.element)
  }

  navigateToEasy() {
    //console.log('clicked')
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': this.element.offsetTop - 110
    })
  }
}

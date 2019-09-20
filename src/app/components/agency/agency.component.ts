import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.component.html",
  styleUrls: ["./agency.component.css"]
})
export class AgencyComponent implements OnInit {
  @Input() agencies;
  constructor() {}
  config: SwiperOptions = {
    autoplay: 3000,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  ngOnInit() {
    console.log(this.agencies);
  }
}

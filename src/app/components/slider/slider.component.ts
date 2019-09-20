import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @Input() sliders;
  @Input() insight;
  constructor() {}
  config: SwiperOptions = {
    autoplay: 7000,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
  };
  getPaginationStatus() {
    console.log(this.insight);
    if (this.sliders.length > 1) {
      this.config.pagination = ".swiper-pagination";
    } else {
      this.config.pagination = "";
    }
  }

  ngOnInit() {
    this.getPaginationStatus();
  }
}

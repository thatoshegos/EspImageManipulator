import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @Input() sliders;
  @Input() insight;
  url;
  constructor(private router: Router) {}
  config: SwiperOptions = {
    autoplay: this.router.url === '/individual-investor/invest-with-us' ? 5000 : null,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
  };
  getPaginationStatus() {
    console.log(this.sliders);
    if (this.sliders.length > 1) {
      this.config.pagination = ".swiper-pagination";
    } else {
      this.config.pagination = "";
    }
  }

  ngOnInit() {
    this.url = this.router.url
    console.log(this.url)
    this.getPaginationStatus();
  }
}
